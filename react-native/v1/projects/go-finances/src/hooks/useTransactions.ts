import { useContext } from 'react';

import { TransactionsContext } from '@contexts/Transactions/context';

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
