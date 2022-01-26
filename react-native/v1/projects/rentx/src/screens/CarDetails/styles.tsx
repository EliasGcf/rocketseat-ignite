import React from 'react';
import { FlatList, FlatListProps, Image, ImageProps, View } from 'react-native';

import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';

import { styled, theme } from 'stitches.config';

import { Row } from '@components/utils/Row';
import { Column } from '@components/utils/Column';
import { Text } from '@components/react-native/Text';

export const Container = styled('View', {
  flex: 1,
  backgroundColor: '$white',
});

export const ImageContainer = styled('View', {
  paddingVertical: 0,
  paddingHorizontal: '$responsive.6',
  maxHeight: '$responsive.44',
});

export const CarImage = styled(
  (props: ImageProps) => <Image {...props} resizeMode="contain" />,
  {
    width: '100%',
    height: '100%',
  },
);

export const Main = styled(Column, {
  flex: 1,
  paddingTop: 0,
  paddingHorizontal: '$responsive.6',
  paddingBottom: 47,
});

export const CarInfo = styled(Row, {
  justifyContent: 'space-between',
});

export const CarName = styled(Text, {
  marginTop: 4,

  color: '$title',
  fontFamily: '$title',
  fontSize: '$responsive.2xl',
});

export const CarPrice = styled(Text, {
  marginTop: 4,

  color: '$brand.mid',
  fontFamily: '$title',
  fontSize: '$responsive.2xl',
});

export const ContentListWrapper = styled('View', {
  height: '100%',
});

export const ContentList = styled(
  (props: FlatListProps<{ type: string; name: string }>) => (
    <FlatList
      {...props}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      ListFooterComponentStyle={{ marginTop: 24, paddingBottom: 24 }}
      ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
    />
  ),
  {
    marginTop: 16,
  },
);

export const Description = styled(Text, {
  color: '$gray.500',
  fontFamily: '$text',
  lineHeight: '$responsive.6',
  fontSize: '$responsive.md',
});

export const Footer = styled('View', {
  backgroundColor: '$gray.100',
  padding: '$responsive.6',
  paddingBottom: isIphoneX() ? getBottomSpace() : theme.space['responsive.6'],

  variants: {
    hasRentTime: {
      true: {
        backgroundColor: '$white',
      },
    },
  },
});
