import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  margin: 24px 0 24px 0;
  padding: 0 24px 0 24px;
  justify-content: space-between;
`;

export const TypeButtonsWrapper = styled.View`
  margin: 16px 0 0 0;
  flex-direction: row;
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
