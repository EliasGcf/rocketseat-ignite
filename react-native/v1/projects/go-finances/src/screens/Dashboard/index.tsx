import React from 'react';

import { Header } from '@screens/Dashboard/components/Header';
import { Transactions } from '@screens/Dashboard/components/Transactions';

import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header />
      <Transactions />
    </Container>
  );
}
