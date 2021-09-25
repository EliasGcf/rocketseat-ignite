import { Text } from '@components/react-native/Text';
import styled, { css } from 'styled-components/native';

type TextProps = {
  tintColor?: string;
};

export const HeaderText = styled(Text)<TextProps>`
  ${({ theme, tintColor }) => css`
    font-size: ${theme.fontSizes.md}px;
    font-family: ${theme.fonts.aliases.text};
    color: ${tintColor || theme.colors.gray[500]};
  `}
`;
