import React from 'react';

import { Amount, Container, CurrencyType, Title } from './styles';

type CategoryCardProps = {
  amount: string;
  title: string;
  color: string;
  shouldHaveBottomSpace: boolean;
};

export function CategoryCard({
  amount,
  title,
  color,
  shouldHaveBottomSpace = false,
}: CategoryCardProps) {
  return (
    <Container shouldHaveBottomSpace={shouldHaveBottomSpace} color={color}>
      <Title>{title}</Title>

      <CurrencyType>
        R$<Amount>{amount}</Amount>
      </CurrencyType>
    </Container>
  );
}
