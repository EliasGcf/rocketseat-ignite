import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { Transaction } from '@contexts/Transactions/context';

export const Container = styled.View`
  flex: 1;
  margin: 32px 0 0 0;
  padding: 0 24px 0 24px;
`;

export const TransactionsTitle = styled.Text`
  font-size: 18px;
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.poppins.regular};
`;

export const TransactionsList = styled(FlatList as new () => FlatList<Transaction>).attrs(
  {
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { paddingBottom: 32 },
  },
)``;
