import { categories } from '@utils/categories';
import React, { useMemo } from 'react';
import { View } from 'react-native';

import { Transaction } from '@contexts/Transactions/context';

import { formatCurrency } from '@utils/formatCurrency';
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
  data: Transaction;
};

export function TransactionCard({ data }: TransactionCardProps) {
  const formattedData = useMemo(() => {
    return {
      ...data,
      formattedAmount: formatCurrency(data.amount),
      formattedDate: data.date.toLocaleDateString('pt-BR'),
    };
  }, [data]);

  const categoryData = categories.find(category => category.key === data.category);

  return (
    <Container>
      <View>
        <Title>{formattedData.title}</Title>
        <Amount type={formattedData.type}>
          {formattedData.type === 'outcome' && '- '}
          {formattedData.formattedAmount}
        </Amount>
      </View>

      <Footer>
        <FooterIcon name={categoryData?.icon} />
        <FooterText>{categoryData?.name}</FooterText>
        <FooterDate>{formattedData.formattedDate}</FooterDate>
      </Footer>
    </Container>
  );
}
