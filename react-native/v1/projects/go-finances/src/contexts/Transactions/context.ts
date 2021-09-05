import { createContext } from 'react';

export type Transaction = {
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

export type TransactionContextData = {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id'>) => Promise<void>;
  getBalance: () => Balance;
};

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);
