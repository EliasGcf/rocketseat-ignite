import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ArrowDownIcon, ArrowUpIcon, Container, Title } from './styles';

export type TransactionTypeButtonProps = TouchableOpacityProps & {
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
    <Container type={type} isChecked={isChecked} {...rest}>
      <Icon />
      <Title>{TitleText[type]}</Title>
    </Container>
  );
}
