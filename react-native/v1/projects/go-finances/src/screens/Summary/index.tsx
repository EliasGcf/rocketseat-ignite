import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { categories } from '@utils/categories';
import { formatCurrency } from '@utils/formatCurrency';
import { useTransactions } from '@hooks/useTransactions';

import { CategoryCard } from '@screens/Summary/CategoryCard';

import { Container } from './styles';

type OutcomeBalance = {
  amount: number;
  categoryKey: string;
  categoryColor: string;
  categoryTitle: string;
  amountFormatted: string;
};

export function Summary() {
  const [outcomeBalance, setOutcomeBalance] = useState<OutcomeBalance[]>([]);
  const { getOutcomeBalanceByCategory } = useTransactions();
  const theme = useTheme();

  const loadBalance = useCallback(async () => {
    const balances = await getOutcomeBalanceByCategory();

    const data: OutcomeBalance[] = balances.map(balance => {
      const categoryData = categories.find(
        findCategory => findCategory.key === balance.categoryKey,
      );

      return {
        ...balance,
        categoryTitle: categoryData?.name || 'Outros',
        categoryColor: categoryData?.color || theme.colors.text,
        amountFormatted: formatCurrency(balance.amount).replace('R$', '').trim(),
      };
    });

    setOutcomeBalance(data);
  }, [getOutcomeBalanceByCategory, theme]);

  useFocusEffect(
    useCallback(() => {
      loadBalance();
    }, [loadBalance]),
  );

  return (
    <Container>
      {outcomeBalance.map((balance, index) => (
        <CategoryCard
          key={balance.categoryKey}
          color={balance.categoryColor}
          title={balance.categoryTitle}
          amount={balance.amountFormatted}
          shouldHaveBottomSpace={index !== outcomeBalance.length - 1}
        />
      ))}
    </Container>
  );
}
