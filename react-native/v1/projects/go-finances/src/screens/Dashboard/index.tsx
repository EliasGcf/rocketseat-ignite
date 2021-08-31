import React from 'react';

import { Header } from '@screens/Dashboard/Header';
import { Transactions } from '@screens/Dashboard/Transactions';

import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header />
      <Transactions />
    </Container>
  );
}
