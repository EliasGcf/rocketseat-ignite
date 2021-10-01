import React from 'react';
import { View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';

import { Row } from '@components/utils/Row';
import { Column } from '@components/utils/Column';
import { Text } from '@components/react-native/Text';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
`;

export const ImageContainer = styled.View`
  ${({ theme }) => css`
    padding: 0 ${theme.spacing.responsive[6]}px;
    max-height: ${theme.spacing.responsive[44]}px;
  `}
`;

export const CarImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
`;

export const Main = styled(Column)`
  flex: 1;

  ${({ theme }) => css`
    padding: 0 ${theme.spacing.responsive[6]}px 47px;
  `}
`;

export const CarInfo = styled(Row)`
  justify-content: space-between;
`;

export const CarName = styled(Text)`
  margin: 4px 0 0 0;

  ${({ theme }) => css`
    color: ${theme.colors.aliases.title};
    font-family: ${theme.fonts.aliases.title};
    font-size: ${theme.fontSizes.responsive['2xl']}px;
  `}
`;

export const CarPrice = styled(Text)`
  margin: 4px 0 0 0;

  ${({ theme }) => css`
    color: ${theme.colors.brand.mid};
    font-family: ${theme.fonts.aliases.title};
    font-size: ${theme.fontSizes.responsive['2xl']}px;
  `};
`;

export const ContentListWrapper = styled.View`
  height: 100%;
`;

export const ContentList = styled.FlatList.attrs(() => {
  return {
    numColumns: 3,
    showsVerticalScrollIndicator: false,
    ListFooterComponentStyle: { marginTop: 24, paddingBottom: 24 },
    ItemSeparatorComponent: () => React.createElement(View, { style: { height: 8 } }),
  };
})`
  margin-top: 16px;
`;

export const Description = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.gray[500]};
    font-family: ${theme.fonts.aliases.text};
    line-height: ${theme.spacing.responsive[6]}px;
    font-size: ${theme.fontSizes.responsive.md}px;
  `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.gray[100]};
    padding: ${theme.spacing.responsive[6]}px;
    padding-bottom: ${isIphoneX() ? getBottomSpace() : theme.spacing.responsive[6]}px;
  `}
`;
