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

export type Balance = {
  income: {
    amount: number;
    lastDate: Date | null;
  };
  outcome: {
    amount: number;
    lastDate: Date | null;
  };
  total: {
    amount: number;
    firstDate: Date | null;
    lastDate: Date | null;
  };
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

  const getBalance = useCallback(async () => {
    const transactions = await getTransactions();

    const balance = transactions.reduce<Balance>(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income.amount = acc.income.amount + transaction.amount;
          if (!acc.income.lastDate) acc.income.lastDate = transaction.date;
          if (acc.income.lastDate.getTime() < transaction.date.getTime()) {
            acc.income.lastDate = transaction.date;
          }
        }

        if (transaction.type === 'outcome') {
          acc.outcome.amount = acc.outcome.amount + transaction.amount;
          if (!acc.outcome.lastDate) acc.outcome.lastDate = transaction.date;
          if (acc.outcome.lastDate.getTime() < transaction.date.getTime()) {
            acc.outcome.lastDate = transaction.date;
          }
        }

        if (!acc.total.firstDate) acc.total.firstDate = transaction.date;
        if (!acc.total.lastDate) acc.total.lastDate = transaction.date;

        if (acc.total.firstDate.getTime() > transaction.date.getTime()) {
          acc.total.firstDate = transaction.date;
        }

        if (acc.total.lastDate.getTime() < transaction.date.getTime()) {
          acc.total.lastDate = transaction.date;
        }

        acc.total.amount = acc.income.amount - acc.outcome.amount;

        return acc;
      },
      {
        income: { amount: 0, lastDate: null },
        outcome: { amount: 0, lastDate: null },
        total: { amount: 0, firstDate: null, lastDate: null },
      },
    );

    return balance;
  }, [getTransactions]);

  const data = useMemo(() => {
    return {
      getTransactions,
      addTransaction,
      getBalance,
    };
  }, [getTransactions, addTransaction, getBalance]);

  return data;
}
