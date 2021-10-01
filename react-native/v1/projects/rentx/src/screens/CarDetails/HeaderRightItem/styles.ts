import styled, { css } from 'styled-components/native';

type DotProps = {
  isActive: boolean;
  shouldHaveSpacing?: boolean;
};

export const Dot = styled.View<DotProps>`
  border-radius: 9999px;

  ${({ theme, isActive, shouldHaveSpacing }) => css`
    width: ${theme.spacing.responsive[3] / 2}px;
    height: ${theme.spacing.responsive[3] / 2}px;

    background: ${isActive ? theme.colors.aliases.title : theme.colors.gray[300]};

    ${shouldHaveSpacing && 'margin-right: 8px'};
  `}
`;
