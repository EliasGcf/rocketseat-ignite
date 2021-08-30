import React from 'react';
import { View } from 'react-native';

import { formatCurrency } from '@utils/formatCurrency';
import { TransactionCard } from '@components/TransactionCard';

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
  const data: Transaction[] = [
    {
      id: '1',
      title: 'Desenvolvimento de site',
      amount: formatCurrency(12000),
      category: 'Vendas',
      date: '13/04/2020',
      type: 'income',
    },
    {
      id: '2',
      title: 'Hamburgueria Pizzy',
      amount: formatCurrency(59),
      category: 'Alimentação',
      date: '10/04/2020',
      type: 'outcome',
    },
    {
      id: '3',
      title: 'Desenvolvimento de site',
      amount: formatCurrency(12000),
      category: 'Vendas',
      date: '13/04/2020',
      type: 'income',
    },
    {
      id: '4',
      title: 'Hamburgueria Pizzy',
      amount: formatCurrency(59),
      category: 'Alimentação',
      date: '10/04/2020',
      type: 'outcome',
    },
  ];

  return (
    <Container>
      <TransactionsTitle>Listagem</TransactionsTitle>

      <TransactionsList
        data={data}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item: transaction }) => <TransactionCard data={transaction} />}
      />
    </Container>
  );
}
