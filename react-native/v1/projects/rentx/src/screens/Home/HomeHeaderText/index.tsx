import React from 'react';

import { HeaderText } from './styles';

type HomeHeaderTextProps = {
  totalCars: number;
};

export function HomeHeaderText({ totalCars }: HomeHeaderTextProps) {
  return <HeaderText>Total de {totalCars} carros</HeaderText>;
}
