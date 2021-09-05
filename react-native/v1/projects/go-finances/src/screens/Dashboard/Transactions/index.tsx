import React from 'react';
import { View } from 'react-native';

import { TransactionCard } from '@components/TransactionCard';
import { useTransactions } from '@hooks/useTransactions';

import { Container, TransactionsList, TransactionsTitle } from './styles';

export function Transactions() {
  const { transactions } = useTransactions();

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
