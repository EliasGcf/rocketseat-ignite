import React from 'react';
import { View, ViewProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CalendarSvg from '@assets/svg/calendar.svg';

import { styled, theme } from 'stitches.config';

import { Row } from '@components/utils/Row';
import { Column } from '@components/utils/Column';
import { Text } from '@components/react-native/Text';

export const WrapperDateInfo = styled(Row, {
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 16,
  paddingBottom: 16,

  borderBottomWidth: 1,
  borderColor: '$gray.200',
});

export const Calendar = styled(
  (props: ViewProps) => (
    <View {...props}>
      <CalendarSvg
        width={theme.sizes['responsive.6']}
        height={theme.sizes['responsive.6']}
      />
    </View>
  ),
  {
    height: '$responsive.12',
    width: '$responsive.12',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$brand.mid',
  },
);

export const DateInfo = styled(Column, {});

export const DateText = styled('TextInput', {
  marginTop: 9,

  color: '$title',
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

export const DateRightArrow = styled(
  (props: ViewProps) => (
    <View {...props}>
      <Ionicons name="chevron-forward" size={20} color={theme.colors['gray.400']} />
    </View>
  ),
  {
    alignItems: 'center',
    justifyContent: 'center',
  },
);

export const AmountWrapper = styled(Row, {
  marginTop: 16,
  alignItems: 'flex-end',
  justifyContent: 'space-between',
});

export const MonthAmount = styled(Text, {
  fontSize: '$responsive.md',
  fontFamily: '$inter.medium',
  color: '$title',
});

export const TotalAmount = styled(Text, {
  fontSize: '$responsive.2xl',
  fontFamily: '$archivo.medium',
  color: '$success.mid',
});
