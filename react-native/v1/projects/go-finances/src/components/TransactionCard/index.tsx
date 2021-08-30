import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import {
  Container,
  Title,
  Amount,
  Footer,
  IconButton,
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
        <IconButton>
          <FooterIcon />
        </IconButton>

        <FooterText>{data.category}</FooterText>
        <FooterDate>{data.date}</FooterDate>
      </Footer>
    </Container>
  );
}
