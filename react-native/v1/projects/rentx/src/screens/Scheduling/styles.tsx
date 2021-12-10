import React from 'react';

import { styled, theme } from 'stitches.config';

import ArrowRight from '@assets/svg/arrow-right.svg';

import { Row } from '@components/utils/Row';
import { Column } from '@components/utils/Column';
import { Text } from '@components/react-native/Text';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';
import { View, ViewProps } from 'react-native';

export const Container = styled('View', {
  flex: 1,
  backgroundColor: '$white',
});

export const Header = styled('View', {
  backgroundColor: '$black',

  paddingTop: '$responsive.6',
  paddingRight: '$responsive.6',
  paddingBottom: '$responsive.8',
  paddingLeft: '$responsive.6',
});

export const Title = styled(Text, {
  color: '$white',
  lineHeight: '$responsive.8',
  fontFamily: '$archivo.semiBold',
  fontSize: theme.fontSizes.md * 2,
});

export const WrapperDateInfo = styled(Row, {
  marginTop: '$responsive.8',
  justifyContent: 'space-between',
});

export const DateInfo = styled(Column, {
  flex: 1,
});

export const DateText = styled('TextInput', {
  marginTop: 9,

  borderBottomWidth: 2,
  borderBottomColor: '$text',

  color: '$white',
  fontFamily: '$inter.medium',
  fontSize: '$responsive.md',

  variants: {
    isField: {
      true: {
        borderBottomColor: '$black',
      },
    },
  },
});

export const Arrow = styled(
  (props: ViewProps) => (
    <View {...props}>
      <ArrowRight
        width={theme.space['responsive.12']}
        height={theme.space['responsive.5'] / 2}
      />
    </View>
  ),
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
);

export const Footer = styled('View', {
  marginTop: 'auto',

  paddingRight: '$responsive.6',
  paddingLeft: '$responsive.6',
  paddingBottom: isIphoneX() ? getBottomSpace() : '$responsive.6',
});
