import React, { FC } from 'react';
import { Image, ImageProps } from 'react-native';
import { SvgUri, UriProps } from 'react-native-svg';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styled, theme } from 'stitches.config';

import { Row } from '@components/utils/Row';
import { Text } from '@components/react-native/Text';

export const Container = styled(RectButton as unknown as FC<RectButtonProps>, {
  flexDirection: 'row',
  alignItems: 'flex-end',

  padding: '$6',
  backgroundColor: '$white',
  height: '$responsive.32',
});

export const Main = styled('View', {
  flex: 1,
  height: '100%',
  justifyContent: 'space-between',
});

export const CarName = styled(Text, {
  marginTop: 4,

  color: '$title',
  fontFamily: '$title',
  fontSize: '$responsive.md',
});

export const Footer = styled(Row, {
  alignItems: 'baseline',
});

export const CarPriceText = styled(Text, {
  marginTop: 4,

  color: '$brand.mid',
  fontFamily: '$title',
  fontSize: '$responsive.md',
});

export const CarCategoryIconUri = styled(
  (props: UriProps) => (
    <SvgUri
      {...props}
      fill={theme.colors['gray.400']}
      width={theme.sizes['responsive.5']}
      height={theme.sizes['responsive.5']}
    />
  ),
  {
    marginLeft: '$6',
  },
);

export const CarImage = styled(
  (props: ImageProps) => <Image {...props} resizeMode="contain" />,
  {
    flex: 1,
    height: '100%',
  },
);
