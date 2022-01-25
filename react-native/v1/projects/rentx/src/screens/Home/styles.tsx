import React from 'react';
import { FlatList, FlatListProps, View } from 'react-native';
import { styled } from 'stitches.config';

import { Car } from '@screens/Home';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';

export const Container = styled('View', {
  flex: 1,
  paddingHorizontal: '$responsive.4',
});

export const CarList = styled(FlatList as new () => FlatList<Car>).attrs(
  ({ theme }) =>
    ({
      data: [],
      renderItem: () => null,
      showsVerticalScrollIndicator: false,
      ItemSeparatorComponent: () => <View style={{ height: 16 }} />,
      contentContainerStyle: {
        paddingTop: theme.space['responsive.4'],
        paddingBottom: isIphoneX() ? getBottomSpace() + 8 : theme.space['responsive.6'],
      },
    } as FlatListProps<Car>),
);
