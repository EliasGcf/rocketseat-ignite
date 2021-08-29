import { Feather, Ionicons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

import { HighlightCardProps } from './index';

type ContainerProps = {
  type: HighlightCardProps['type'];
  hasMarginRight: boolean;
};

export const Container = styled.View<ContainerProps>`
  width: 300px;
  height: 200px;
  border-radius: 5px;
  padding: 18px 20px 0 22px;
  background: ${({ theme }) => theme.colors.shape};

  ${({ type }) =>
    type === 'total' &&
    css`
      background: ${({ theme }) => theme.colors.secondary};
    `}

  ${({ hasMarginRight }) => hasMarginRight && 'margin-right: 16px;'}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

type TitleProps = {
  type: HighlightCardProps['type'];
};

export const Title = styled.Text<TitleProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.poppins.regular};

  ${({ type }) =>
    type === 'total' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`;

export const IconButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 40px;
  width: 40px;
`;

export const ArrowUpIcon = styled(Ionicons).attrs({
  name: 'arrow-up-circle-outline',
  size: 40,
})`
  color: ${({ theme }) => theme.colors.success};
`;

export const ArrowDownIcon = styled(Ionicons).attrs({
  name: 'arrow-down-circle-outline',
  size: 40,
})`
  color: ${({ theme }) => theme.colors.attention};
`;

export const DollarIcon = styled(Feather).attrs({
  name: 'dollar-sign',
  size: 40,
})`
  color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.View`
  margin: 32px 0 0 0;
`;

type ValueProps = {
  type: HighlightCardProps['type'];
};

export const Value = styled.Text<ValueProps>`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.poppins.regular};

  ${({ type }) =>
    type === 'total' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`;

type LastTransactionProps = {
  type: HighlightCardProps['type'];
};

export const LastTransaction = styled.Text<LastTransactionProps>`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.poppins.regular};

  ${({ type }) =>
    type === 'total' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`;
