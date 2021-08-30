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
  type: 'income' | 'outcome';
  containerStyle?: StyleProp<ViewStyle>;
};

export function TransactionCard({ type, containerStyle }: TransactionCardProps) {
  return (
    <Container style={containerStyle}>
      <View>
        <Title>Desenvolvimento de site</Title>
        <Amount type={type}>{type === 'outcome' && '- '}R$ 12.000,00</Amount>
      </View>

      <Footer>
        <IconButton>
          <FooterIcon />
        </IconButton>

        <FooterText>Vendas</FooterText>
        <FooterDate>12/04/2020</FooterDate>
      </Footer>
    </Container>
  );
}
