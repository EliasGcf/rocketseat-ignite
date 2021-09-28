import { StyleProp, ViewStyle } from 'react-native';
import React from 'react';

import SpeedSvg from '@assets/svg/speed.svg';

import { Container, Title } from './styles';

type SpecificationCardProps = {
  style?: StyleProp<ViewStyle>;
};

export function SpecificationCard({ style }: SpecificationCardProps) {
  return (
    <Container style={style}>
      <SpeedSvg />
      <Title>380km/h</Title>
    </Container>
  );
}
