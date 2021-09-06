import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Main = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: 30px;
  max-width: 279px;
  line-height: 40px;
  margin: 40px 0 0 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.poppins.medium};
`;

export const Description = styled.Text`
  font-size: 16px;
  max-width: 190px;
  text-align: center;
  margin: 80px 0 0 0;
  line-height: ${16 * 1.4}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.poppins.regular};
`;

export const Footer = styled.View`
  width: 100%;
  height: 30%;
  padding: 0 32px 0 32px;
  background: ${({ theme }) => theme.colors.secondary};
`;
