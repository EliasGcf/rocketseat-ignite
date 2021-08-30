import React from 'react';

import { TransactionCard } from '@components/TransactionCard';

import { Container, TransactionsTitle } from './styles';

export function Transactions() {
  return (
    <Container>
      <TransactionsTitle>Listagem</TransactionsTitle>

      <TransactionCard type="income" containerStyle={{ marginBottom: 16 }} />
      <TransactionCard type="outcome" />
    </Container>
  );
}
