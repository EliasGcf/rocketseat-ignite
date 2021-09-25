import React, { ReactNode } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

type TextProps = RNTextProps & {
  children: ReactNode;
};

export function Text({ children, style, ...rest }: TextProps) {
  return (
    <RNText style={[{ includeFontPadding: false }, style]} {...rest}>
      {children}
    </RNText>
  );
}
