import styled, { css } from 'styled-components/native';

export const LabelText = styled.Text`
  letter-spacing: 2px;
  text-transform: uppercase;

  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xxs}px;
    color: ${theme.colors.aliases.label};
    font-family: ${theme.fonts.aliases.label};
  `};
`;
