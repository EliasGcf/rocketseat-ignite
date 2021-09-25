import React from 'react';

import { HeaderText } from './styles';

type HomeHeaderTextProps = {
  tintColor?: string;
};

export function HomeHeaderText({ tintColor }: HomeHeaderTextProps) {
  return <HeaderText tintColor={tintColor}>Total de 12 carros</HeaderText>;
}
