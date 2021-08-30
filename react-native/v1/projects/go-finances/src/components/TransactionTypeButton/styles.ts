import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { transparentize } from 'polished';

import { TransactionTypeButtonProps } from './index';

type ContainerProps = {
  isChecked: boolean;
  type: TransactionTypeButtonProps['type'];
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: Number(0.7),
})<ContainerProps>`
  flex: 1;
  height: 56px;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  padding: 0 28px 0 28px;
  justify-content: center;
  border: 1.5px solid ${({ theme }) => transparentize(0.8, theme.colors.text)};

  ${({ isChecked, type }) => {
    if (isChecked && type === 'income') {
      return css`
        background: ${({ theme }) => transparentize(0.9, theme.colors.success)};
        border: none;
      `;
    }

    if (isChecked && type === 'outcome') {
      return css`
        background: ${({ theme }) => transparentize(0.9, theme.colors.attention)};
        border: none;
      `;
    }
  }}
`;

export const Title = styled.Text`
  font-size: 14px;
  margin: 0 0 0 12px;
  line-height: ${14 * 1.4}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.poppins.regular};
`;

export const ArrowUpIcon = styled(Ionicons).attrs({
  name: 'arrow-up-circle-outline',
  size: 24,
})`
  color: ${({ theme }) => theme.colors.success};
`;

export const ArrowDownIcon = styled(Ionicons).attrs({
  name: 'arrow-down-circle-outline',
  size: 24,
})`
  color: ${({ theme }) => theme.colors.attention};
`;
