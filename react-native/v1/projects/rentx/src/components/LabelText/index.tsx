import styled, { css } from 'styled-components/native';

import { Text } from '@components/react-native/Text';

export const LabelText = styled(Text)`
  letter-spacing: 2px;
  text-transform: uppercase;

  ${({ theme }) => css`
    color: ${theme.colors.aliases.label};
    font-family: ${theme.fonts.aliases.label};
    font-size: ${theme.fontSizes.responsive.xxs}px;
  `};
`;
