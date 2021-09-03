import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { formatCurrency } from '@utils/formatCurrency';
import { TransactionCard } from '@components/TransactionCard';
import { useTransactions } from '@hooks/useTransactions';

import { Container, TransactionsList, TransactionsTitle } from './styles';

export type Transaction = {
  id: string;
  date: string;
  title: string;
  amount: string;
  category: string;
  type: 'income' | 'outcome';
};

export function Transactions() {
  const { getTransactions } = useTransactions();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const loadTransactions = useCallback(async () => {
    const storageTransactions = await getTransactions();

    const formattedTransactions: Transaction[] = storageTransactions.map(transaction => {
      return {
        ...transaction,
        amount: formatCurrency(transaction.amount),
        date: transaction.date.toLocaleDateString('pt-BR'),
      };
    });

    setTransactions(formattedTransactions);
  }, [getTransactions]);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [loadTransactions]),
  );

  return (
    <Container>
      <TransactionsTitle>Listagem</TransactionsTitle>

      <TransactionsList
        data={transactions}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item: transaction }) => <TransactionCard data={transaction} />}
      />
    </Container>
  );
}
