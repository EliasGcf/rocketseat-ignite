import { isIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  margin: 24px 0 24px 0;
  padding: 0 24px 0 24px;
  justify-content: space-between;
`;

export const Header = styled.View`
  background: ${({ theme }) => theme.colors.primary};

  padding: 37px 0 20px 0;

  align-items: center;
  justify-content: flex-end;

  ${isIphoneX() &&
  css`
    padding: ${getStatusBarHeight() + 37}px 0 20px 0;
  `}
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.poppins.regular};
`;

export const Button = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  height: 56px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  line-height: ${14 * 1.4}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.poppins.medium};
`;
