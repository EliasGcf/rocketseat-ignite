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
  IconButton,
} from './styles';

type HighlightCardData = {
  value: number;
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
        <IconButton style={{ height: 40 }} activeOpacity={0.7}>
          <CardIcon />
        </IconButton>
      </Header>

      <Content>
        <Value type={type}>R$ {data.value}</Value>
        <LastTransaction type={type}>{data.description}</LastTransaction>
      </Content>
    </Container>
  );
}
