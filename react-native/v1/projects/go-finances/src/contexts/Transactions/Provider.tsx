import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import {
  Balance,
  Transaction,
  TransactionsContext,
  TransactionContextData,
} from '@contexts/Transactions/context';

const STORAGE_KEY = '@go-finances:transactions';

type TransactionsContextProviderProps = {
  children: ReactNode;
};

export function TransactionsContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function loadTransactions() {
      const storage = await AsyncStorage.getItem(STORAGE_KEY);
      const parsedTransactions: Transaction[] = storage ? JSON.parse(storage) : [];

      const transactionsData = parsedTransactions.map(transaction => {
        return {
          ...transaction,
          date: new Date(transaction.date),
          amount: Number(transaction.amount),
        };
      });

      setTransactions(transactionsData);
    }

    loadTransactions();
  }, []);

  const addTransaction = useCallback<TransactionContextData['addTransaction']>(
    async transaction => {
      const newTransaction = { ...transaction, id: String(uuid.v4()) };

      const newTransactions = [...transactions, newTransaction];

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTransactions));

      setTransactions(newTransactions);
    },
    [transactions],
  );

  const getBalance = useCallback(() => {
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
  }, [transactions]);

  const value = useMemo<TransactionContextData>(() => {
    return {
      transactions,
      addTransaction,
      getBalance,
    };
  }, [transactions, addTransaction, getBalance]);

  return (
    <TransactionsContext.Provider value={value}>{children}</TransactionsContext.Provider>
  );
}
