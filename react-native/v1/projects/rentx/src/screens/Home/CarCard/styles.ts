import styled, { css } from 'styled-components/native';
import { SvgUri } from 'react-native-svg';

import { Row } from '@components/utils/Row';
import { Text } from '@components/react-native/Text';

export const Container = styled(Row)`
  align-items: flex-end;

  ${({ theme }) => css`
    padding: ${theme.spacing[6]}px;
    background: ${theme.colors.white};
    height: ${theme.spacing.responsive[32]}px;
  `};
`;

export const Main = styled.View`
  flex: 1;
  height: 100%;
  justify-content: space-between;
`;

export const CarName = styled(Text)`
  margin: 4px 0 0 0;

  ${({ theme }) => css`
    color: ${theme.colors.aliases.title};
    font-family: ${theme.fonts.aliases.title};
    font-size: ${theme.fontSizes.responsive.md}px;
  `}
`;

export const Footer = styled(Row)`
  align-items: baseline;
`;

export const CarPriceText = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.brand.mid};
    margin: ${theme.spacing[1]}px 0 0 0;
    font-family: ${theme.fonts.aliases.title};
    font-size: ${theme.fontSizes.responsive.md}px;
  `};
`;

export const CarCategoryIconUri = styled(SvgUri).attrs(({ theme }) => {
  return {
    fill: theme.colors.aliases.label,
    width: theme.spacing.responsive[5],
    height: theme.spacing.responsive[5],
  };
})`
  margin: 0 0 0 ${({ theme }) => theme.spacing[6]}px;
`;

export const CarImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  flex: 1;
  height: 100%;
`;
