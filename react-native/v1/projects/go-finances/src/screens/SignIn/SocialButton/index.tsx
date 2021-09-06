import React from 'react';
import { SvgProps } from 'react-native-svg';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, IconContainer, Title } from './styles';

type SocialButtonProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
};

export function SocialButton({ title, icon: Icon, ...rest }: SocialButtonProps) {
  return (
    <Container {...rest}>
      <IconContainer>
        <Icon />
      </IconContainer>

      <Title>{title}</Title>
    </Container>
  );
}
