import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useCallback, useMemo } from 'react';
import uuid from 'react-native-uuid';

type Transaction = {
  id: string;
  date: Date;
  title: string;
  amount: number;
  category: string;
  type: 'income' | 'outcome';
};

export function useTransactions() {
  const storage = useAsyncStorage('@go-finances:transactions');

  const getTransactions = useCallback<() => Promise<Transaction[]>>(async () => {
    const storageTransactions = await storage.getItem();

    if (!storageTransactions) return [];

    const parsedTransactions = JSON.parse(storageTransactions) as Transaction[];

    const transactions = parsedTransactions.map(transaction => {
      return {
        ...transaction,
        date: new Date(transaction.date),
        amount: Number(transaction.amount),
      };
    });

    return transactions;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTransaction = useCallback(async (transaction: Omit<Transaction, 'id'>) => {
    const transactions = await getTransactions();

    const transactionData = {
      ...transaction,
      id: String(uuid.v4()),
    };

    transactions.push(transactionData);

    await storage.setItem(JSON.stringify(transactions));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = useMemo(() => {
    return {
      getTransactions,
      addTransaction,
    };
  }, [getTransactions, addTransaction]);

  return data;
}
