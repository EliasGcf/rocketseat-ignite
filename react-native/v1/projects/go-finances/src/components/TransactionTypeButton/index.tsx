import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, ArrowDownIcon, ArrowUpIcon, Button, Title } from './styles';

export type TransactionTypeButtonProps = RectButtonProps & {
  type: 'income' | 'outcome';
  isChecked: boolean;
};

export function TransactionTypeButton({
  type,
  isChecked,
  ...rest
}: TransactionTypeButtonProps) {
  const TitleText = {
    income: 'Income',
    outcome: 'Outcome',
  };

  const Icon = {
    income: ArrowUpIcon,
    outcome: ArrowDownIcon,
  }[type];

  return (
    <Container type={type} isChecked={isChecked}>
      <Button type={type} isChecked={isChecked} {...rest}>
        <Icon />
        <Title>{TitleText[type]}</Title>
      </Button>
    </Container>
  );
}
