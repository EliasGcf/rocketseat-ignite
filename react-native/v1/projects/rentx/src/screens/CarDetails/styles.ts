import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
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
  /* justify-content: space-between; */

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

export const Description = styled(Text)`
  line-height: 24px;

  ${({ theme }) => css`
    color: ${theme.colors.gray[500]};
    font-family: ${theme.fonts.aliases.text};
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

export const SubmitButton = styled(RectButton)`
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background: ${theme.colors.brand.mid};
    height: ${theme.spacing.responsive[14]}px;
  `}
`;

export const SubmitButtonText = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.aliases.button};
    font-size: ${theme.fontSizes.responsive.md}px;
  `}
`;
