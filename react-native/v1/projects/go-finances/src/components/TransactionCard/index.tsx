import { categories } from '@utils/categories';
import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Title,
  Amount,
  Footer,
  FooterIcon,
  FooterText,
  FooterDate,
} from './styles';

export type TransactionCardProps = {
  data: {
    type: 'income' | 'outcome';
    date: string;
    title: string;
    amount: string;
    category: string;
  };
};

export function TransactionCard({ data }: TransactionCardProps) {
  const categoryData = categories.find(category => category.key === data.category);

  return (
    <Container>
      <View>
        <Title>{data.title}</Title>
        <Amount type={data.type}>
          {data.type === 'outcome' && '- '}
          {data.amount}
        </Amount>
      </View>

      <Footer>
        <FooterIcon name={categoryData?.icon} />
        <FooterText>{categoryData?.name}</FooterText>
        <FooterDate>{data.date}</FooterDate>
      </Footer>
    </Container>
  );
}
