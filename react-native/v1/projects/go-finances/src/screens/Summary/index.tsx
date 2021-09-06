import React, { useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import { VictoryPie } from 'victory-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { categories } from '@utils/categories';
import { formatCurrency } from '@utils/formatCurrency';
import { useTransactions } from '@hooks/useTransactions';

import { MonthSelect } from '@screens/Summary/MonthSelect';
import { CategoryCard } from '@screens/Summary/CategoryCard';

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
  const tabBarHeight = useBottomTabBarHeight();
  const theme = useTheme();

  const { transactions } = useTransactions();

  const lastMonth = useMemo(() => {
    const outcomeTransactions = transactions.filter(
      transaction => transaction.type === 'outcome',
    );
    const lastTransactions = outcomeTransactions[outcomeTransactions.length - 1];

    return lastTransactions.date;
  }, [transactions]);

  const [currentMonth, setCurrentMonth] = useState(lastMonth);

  const outcomeBalanceFilteredByMonth = useMemo<OutcomeBalance>(() => {
    const balance = transactions.reduce(
      (acc, transaction) => {
        if (transaction.type !== 'outcome') return acc;
        if (
          currentMonth &&
          (transaction.date.getMonth() !== currentMonth.getMonth() ||
            transaction.date.getFullYear() !== currentMonth.getFullYear())
        ) {
          return acc;
        }

        acc.total = acc.total + transaction.amount;

        const category = acc.categories.find(
          findCategory => findCategory.key === transaction.category,
        );

        if (!category) {
          acc.categories.push({
            key: transaction.category,
            amount: transaction.amount,
          });

          return acc;
        }

        category.amount = category.amount + transaction.amount;

        return acc;
      },
      {
        total: 0,
        categories: [] as { key: string; amount: number }[],
      },
    );

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

    return data;
  }, [currentMonth, theme.colors.text, transactions]);

  function handleCurrentMonthChange(date: Date) {
    if (date === currentMonth) return;

    setCurrentMonth(date);
  }

  return (
    <Container bottomOffset={tabBarHeight}>
      <MonthSelect onMonthChange={handleCurrentMonthChange} />

      <VictoryPie
        y="amount"
        height={277}
        x="percent"
        labelRadius={50}
        padding={{ top: 0, bottom: 32 }}
        data={outcomeBalanceFilteredByMonth.categories}
        colorScale={outcomeBalanceFilteredByMonth.categories.map(
          category => category.color,
        )}
        style={{ labels: { fontSize: 16, fill: theme.colors.shape, fontWeight: 'bold' } }}
      />

      {outcomeBalanceFilteredByMonth.categories.map((category, index) => (
        <CategoryCard
          key={category.key}
          color={category.color}
          title={category.title}
          amount={category.amountFormatted}
          shouldHaveBottomSpace={
            index !== outcomeBalanceFilteredByMonth.categories.length - 1
          }
        />
      ))}
    </Container>
  );
}
