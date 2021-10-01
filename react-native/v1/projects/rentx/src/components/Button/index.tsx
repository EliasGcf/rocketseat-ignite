import React from 'react';

import { ButtonContainer, ButtonText } from './styles';

type ButtonProps = {
  title: string;
  enabled?: boolean;
  onPress?: () => void;
  variant?: 'primary' | 'success';
};

export function Button({
  title,
  onPress,
  enabled = true,
  variant = 'primary',
}: ButtonProps) {
  return (
    <ButtonContainer enabled={enabled} variant={variant} onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
