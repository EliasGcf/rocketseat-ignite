import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { Text } from '@components/react-native/Text';

type ButtonContainerProps = {
  variant: 'primary' | 'success';
};

export const ButtonContainer = styled(RectButton)<ButtonContainerProps>`
  align-items: center;
  justify-content: center;

  ${({ theme, variant }) => css`
    height: ${theme.spacing.responsive[14]}px;

    ${variant === 'primary' &&
    css`
      background: ${theme.colors.brand.mid};
    `}

    ${variant === 'success' &&
    css`
      background: ${theme.colors.success.mid};
    `}
  `}

  ${({ enabled }) =>
    !enabled &&
    css`
      opacity: 0.5;
    `}
`;

export const ButtonText = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.aliases.button};
    font-size: ${theme.fontSizes.responsive.md}px;
  `}
`;
