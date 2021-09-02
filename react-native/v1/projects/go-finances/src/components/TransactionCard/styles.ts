import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

import { TransactionCardProps } from './index';

export const Container = styled.View`
  height: 128px;
  border-radius: 5px;
  padding: 18px 24px 18px 24px;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.shape};
`;

export const Title = styled.Text`
  font-size: 14px;
  margin: 0 0 2px 0;
  line-height: ${14 * 1.4}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.poppins.regular};
`;

type AmountProps = {
  type: TransactionCardProps['data']['type'];
};

export const Amount = styled.Text<AmountProps>`
  font-size: 20px;
  line-height: ${20 * 1.4}px;
  color: ${({ theme }) => theme.colors.success};
  font-family: ${({ theme }) => theme.fonts.poppins.regular};

  ${({ type }) =>
    type === 'outcome' &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `};
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FooterIcon = styled(Feather).attrs({
  name: 'dollar-sign',
  size: 20,
})`
  height: 20px;
  margin: 0 12px 0 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const FooterText = styled.Text`
  font-size: 14px;
  line-height: ${14 * 1.4}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.poppins.regular};
`;

export const FooterDate = styled.Text`
  font-size: 14px;
  margin: 0 0 0 auto;
  line-height: ${14 * 1.4}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.poppins.regular};
`;
