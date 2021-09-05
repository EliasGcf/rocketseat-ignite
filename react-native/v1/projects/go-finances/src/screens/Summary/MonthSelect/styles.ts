import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin: 0 0 32px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;

  ${({ disabled }) => disabled && `opacity: 0.2;`}
`;

export const ChevronLeft = styled(Feather).attrs({
  name: 'chevron-left',
  size: 24,
  color: '#000',
})``;

export const ChevronRight = styled(Feather).attrs({
  name: 'chevron-right',
  size: 24,
  color: '#000',
})``;

export const Title = styled.Text`
  font-size: 20px;
  line-height: ${20 * 1.4}px;
  font-family: ${({ theme }) => theme.fonts.poppins.regular};
  color: #000;
`;
