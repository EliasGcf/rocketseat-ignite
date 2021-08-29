import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

const Row = styled.View`
  flex-direction: row;
`;

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  padding: 28px 0 0 0;
  background: ${({ theme }) => theme.colors.primary};

  ${isIphoneX() &&
  css`
    padding: ${getStatusBarHeight() + 28}px 0 0 0;
  `}
`;

export const UserInfo = styled(Row)`
  height: 48px;
  padding: 0 24px 0 24px;
  align-items: center;
`;

export const UserAvatar = styled.Image`
  width: 48px;
  height: 48px;
  margin: 0 18px 0 0;
  border-radius: 10px;
`;

export const UserTextContainer = styled.View`
  align-items: flex-start;
  justify-content: space-around;
`;

export const UserGreeting = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.poppins.regular};
  color: #fff;
`;

export const UserName = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.poppins.bold};
  color: #fff;
`;

export const PowerIcon = styled(Feather).attrs(props => {
  return { name: 'power' };
})`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 24px;
`;
