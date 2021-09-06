import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex-direction: row;
  background: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  height: 56px;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 14px;
  text-align: center;
  line-height: ${14 * 1.4}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.poppins.medium};
`;

export const IconContainer = styled.View`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors.background};
`;
