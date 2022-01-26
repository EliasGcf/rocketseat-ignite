import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { Container, Title } from './styles';

type SpecificationCardProps = {
  style?: StyleProp<ViewStyle>;
  title: string;
  icon: React.FC<SvgProps>;
};

export function SpecificationCard({ style, title, icon: Icon }: SpecificationCardProps) {
  return (
    <Container style={style}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
