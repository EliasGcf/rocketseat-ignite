import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { VictoryPie } from 'victory-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { categories } from '@utils/categories';
import { formatCurrency } from '@utils/formatCurrency';
import { useTransactions } from '@hooks/useTransactions';

import { CategoryCard } from '@screens/Summary/CategoryCard';

import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

type OutcomeBalance = {
  total: number;
  categories: Array<{
    key: string;
    title: string;
    color: string;
    amount: number;
    percent: string;
    amountFormatted: string;
  }>;
};

export function Summary() {
  const [outcomeBalance, setOutcomeBalance] = useState<OutcomeBalance | null>(null);
  const { getOutcomeBalanceByCategory } = useTransactions();
  const tabBarHeight = useBottomTabBarHeight();
  const theme = useTheme();

  const loadBalance = useCallback(async () => {
    const balance = await getOutcomeBalanceByCategory();

    const data: OutcomeBalance = {
      ...balance,
      categories: balance.categories.map(category => {
        const categoryData = categories.find(
          findCategory => findCategory.key === category.key,
        );

        return {
          ...category,
          percent: `${((category.amount / balance.total) * 100).toFixed(0)}%`,
          title: categoryData?.name || 'Outros',
          color: categoryData?.color || theme.colors.text,
          amountFormatted: formatCurrency(category.amount).replace('R$', '').trim(),
        };
      }),
    };

    setOutcomeBalance(data);
  }, [getOutcomeBalanceByCategory, theme]);

  useFocusEffect(
    useCallback(() => {
      loadBalance();
    }, [loadBalance]),
  );

  if (!outcomeBalance) {
    return <ActivityIndicator />;
  }

  return (
    <Container bottomOffset={tabBarHeight}>
      <VictoryPie
        y="amount"
        height={277}
        x="percent"
        labelRadius={50}
        padding={{ top: 0, bottom: 32 }}
        data={outcomeBalance.categories}
        colorScale={outcomeBalance.categories.map(category => category.color)}
        style={{ labels: { fontSize: 16, fill: theme.colors.shape, fontWeight: 'bold' } }}
      />

      {outcomeBalance.categories.map((category, index) => (
        <CategoryCard
          key={category.key}
          color={category.color}
          title={category.title}
          amount={category.amountFormatted}
          shouldHaveBottomSpace={index !== outcomeBalance.categories.length - 1}
        />
      ))}
    </Container>
  );
}
