import styled from 'styled-components/native';

type TextProps = {
  tintColor?: string;
};

export const Text = styled.Text<TextProps>`
  color: ${({ tintColor, theme }) => tintColor || theme.colors.gray[500]};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-family: ${({ theme }) => theme.fonts.aliases.text};
`;
