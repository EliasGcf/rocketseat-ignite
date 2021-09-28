import styled from 'styled-components/native';

import { Text } from '@components/react-native/Text';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.gray[100]};
  height: ${({ theme }) => theme.spacing.responsive[23]}px;

  border-bottom-color: ${({ theme }) => theme.colors.gray[200]};
  border-bottom-width: ${({ theme }) => theme.spacing.responsive.px}px;
`;

export const Title = styled(Text)`
  margin: 12px 0 0 0;
  color: ${({ theme }) => theme.colors.aliases.text};
  font-family: ${({ theme }) => theme.fonts.aliases.button};
  font-size: ${({ theme }) => theme.fontSizes.responsive.xs}px;
`;
