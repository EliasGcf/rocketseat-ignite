import { TextInput as RNTextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

export const TextInput = styled(RNTextInput).attrs(props => {
  return {
    placeholderTextColor: props.theme.colors.text,
  } as TextInputProps;
})`
  height: 56px;
  font-size: 14px;
  border-radius: 5px;
  padding: 0 16px 0 16px;

  color: ${({ theme }) => theme.colors.title};
  background: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.poppins.regular};
`;
