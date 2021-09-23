import styled, { css } from 'styled-components/native';
import { SvgUri } from 'react-native-svg';

import { Row } from '@components/utils/Row';
import { Column } from '@components/utils/Column';

export const Container = styled(Row)`
  height: 126px;
  align-items: flex-end;
  padding: 24px 24px 16px 24px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.View`
  flex: 1;
  height: 100%;
  justify-content: space-between;
`;

export const CarName = styled.Text`
  margin: 4px 0 0 0;

  ${({ theme }) => css`
    font-size: ${theme.fontSizes.md}px;
    color: ${theme.colors.aliases.title};
    font-family: ${theme.fonts.aliases.title};
  `}
`;

export const CarPrice = styled(Column)`
  margin: 0 24px 0 0;
`;

export const CarPriceText = styled.Text`
  margin: 4px 0 0 0;

  ${({ theme }) => css`
    color: ${theme.colors.brand.mid};
    font-size: ${theme.fontSizes.md}px;
    font-family: ${theme.fonts.aliases.title};
  `};
`;

export const CarCategoryIconUri = styled(SvgUri).attrs((props) => {
  return {
    height: 20,
    width: 20,
    fill: props.theme.colors.aliases.label,
  };
})`
  margin: auto 0 0 0;
`;

export const CarImage = styled.Image`
  flex: 1;
  height: 100%;
`;
