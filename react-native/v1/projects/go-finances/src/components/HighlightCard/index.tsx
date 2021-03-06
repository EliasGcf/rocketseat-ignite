import React from 'react';

import {
  Container,
  Header,
  Title,
  ArrowUpIcon,
  Content,
  Value,
  LastTransaction,
  ArrowDownIcon,
  DollarIcon,
} from './styles';

type HighlightCardData = {
  value: string;
  description: string;
};

export type HighlightCardProps = {
  data: HighlightCardData;
  type: 'income' | 'outcome' | 'total';
  hasMarginRight?: boolean;
};

export function HighlightCard({
  data,
  type,
  hasMarginRight = false,
}: HighlightCardProps) {
  const CardIcon = {
    income: ArrowUpIcon,
    outcome: ArrowDownIcon,
    total: DollarIcon,
  }[type];

  const cardTitle = {
    income: 'Entradas',
    outcome: 'Saídas',
    total: 'Total',
  };

  return (
    <Container type={type} hasMarginRight={hasMarginRight}>
      <Header>
        <Title type={type}>{cardTitle[type]}</Title>
        <CardIcon />
      </Header>

      <Content>
        <Value type={type}>{data.value}</Value>
        <LastTransaction type={type}>{data.description}</LastTransaction>
      </Content>
    </Container>
  );
}
