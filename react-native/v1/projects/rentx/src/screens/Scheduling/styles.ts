import React from 'react';
import styled, { css } from 'styled-components/native';

import ArrowRight from '@assets/svg/arrow-right.svg';

import { Row } from '@components/utils/Row';
import { Column } from '@components/utils/Column';
import { Text } from '@components/react-native/Text';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    padding-top: ${theme.spacing.responsive[6]}px;
    padding-right: ${theme.spacing.responsive[6]}px;
    padding-bottom: ${theme.spacing.responsive[8]}px;
    padding-left: ${theme.spacing.responsive[6]}px;
  `}
`;

export const Title = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    line-height: ${theme.spacing.responsive[8]}px;
    font-family: ${theme.fonts.archivo.semiBold};
    font-size: ${theme.fontSizes.responsive.md * 2}px;
  `}
`;

export const WrapperDateInfo = styled(Row)`
  margin: ${({ theme }) => theme.spacing.responsive[8]}px 0 0 0;

  justify-content: space-between;
`;

export const DateInfo = styled(Column)`
  flex: 1;
`;

export const DateText = styled.TextInput.attrs(() => {
  return { editable: false };
})`
  margin-top: 9px;

  ${({ theme, value }) => css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.aliases.text};

    color: ${theme.colors.white};
    font-family: ${theme.fonts.inter.medium};
    font-size: ${theme.fontSizes.responsive.md}px;

    ${value &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.black};
    `};
  `}
`;

export const Arrow = styled.View.attrs(({ theme }) => {
  return {
    children: React.createElement(ArrowRight, {
      width: theme.spacing.responsive[12],
      height: theme.spacing.responsive[5] / 2,
    }),
  };
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  margin-top: auto;

  ${({ theme }) => css`
    padding-right: ${theme.spacing.responsive[6]}px;
    padding-left: ${theme.spacing.responsive[6]}px;
    padding-bottom: ${isIphoneX() ? getBottomSpace() : theme.spacing.responsive[6]}px;
  `}
`;
