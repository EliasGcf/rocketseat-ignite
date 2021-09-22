import React from 'react';

import { Text } from './styles';

type HomeHeaderTextProps = {
  tintColor?: string;
};

export function HomeHeaderText({ tintColor }: HomeHeaderTextProps) {
  return <Text tintColor={tintColor}>Total de 12 carros</Text>;
}
