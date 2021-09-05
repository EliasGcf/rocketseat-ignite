import styled from 'styled-components/native';

type ContainerProps = {
  color?: string;
  shouldHaveBottomSpace: boolean;
};

export const Container = styled.View<ContainerProps>`
  height: 48px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px 0 24px;
  border-left-width: 5px;
  justify-content: space-between;
  border-left-color: ${({ color }) => color};
  background: ${({ theme }) => theme.colors.shape};

  ${({ shouldHaveBottomSpace }) => shouldHaveBottomSpace && 'margin-bottom: 8px;'}
`;

export const Title = styled.Text`
  font-size: 15px;
  line-height: ${15 * 1.4}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.poppins.regular};
`;

export const CurrencyType = styled.Text`
  font-size: 15px;
  line-height: ${15 * 1.4}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.poppins.medium};
`;

export const Amount = styled.Text`
  font-size: 15px;
  line-height: ${15 * 1.4}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.poppins.bold};
`;
