import React, { ReactNode } from 'react';
import { Text } from '@components/react-native/Text';
import { TextProps } from 'react-native';
import { styled } from 'stitches.config';

type HeaderTextProps = TextProps & {
  tintColor?: string;
  children: ReactNode;
};

export const HeaderText = styled(
  ({ tintColor, children, ...rest }: HeaderTextProps) => (
    <Text {...rest} style={{ color: tintColor }}>
      {children}
    </Text>
  ),
  {
    fontSize: '$md',
    fontFamily: '$text',
    color: '$gray.500',
  },
);
