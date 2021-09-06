import React, { useMemo, useState } from 'react';
import { format, startOfMonth } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useTransactions } from '@hooks/useTransactions';

import { ChevronLeft, ChevronRight, Container, IconButton, Title } from './styles';

type MonthSelectProps = {
  onMonthChange: (date: Date) => void;
};

export function MonthSelect({ onMonthChange }: MonthSelectProps) {
  const { transactions } = useTransactions();

  const outcomeMonths = useMemo(() => {
    const outcomeTransactions = transactions.filter(
      transaction => transaction.type === 'outcome',
    );

    const uniqueMonths = new Set(
      outcomeTransactions.map(transaction => {
        return startOfMonth(transaction.date).getTime();
      }),
    );

    return Array.from(uniqueMonths).map(date => new Date(date));
  }, [transactions]);

  const [currentMonth, setCurrentMonth] = useState(
    outcomeMonths[outcomeMonths.length - 1],
  );

  const formattedCurrentMonth = useMemo(() => {
    return format(currentMonth, "MMMM',' yyyy", { locale: ptBR });
  }, [currentMonth]);

  function handlePreviousMonthChange() {
    const previousMonthIndex = outcomeMonths.indexOf(currentMonth) - 1;

    if (previousMonthIndex < 0) return;

    setCurrentMonth(outcomeMonths[previousMonthIndex]);
    onMonthChange(outcomeMonths[previousMonthIndex]);
  }

  function handleNextMonthChange() {
    const nextMonthIndex = outcomeMonths.indexOf(currentMonth) + 1;

    if (nextMonthIndex >= outcomeMonths.length) return;

    setCurrentMonth(outcomeMonths[nextMonthIndex]);
    onMonthChange(outcomeMonths[nextMonthIndex]);
  }

  return (
    <Container>
      <IconButton
        onPress={handlePreviousMonthChange}
        disabled={outcomeMonths.indexOf(currentMonth) === 0}
      >
        <ChevronLeft />
      </IconButton>

      <Title>{formattedCurrentMonth}</Title>

      <IconButton
        onPress={handleNextMonthChange}
        disabled={outcomeMonths.indexOf(currentMonth) === outcomeMonths.length - 1}
      >
        <ChevronRight />
      </IconButton>
    </Container>
  );
}
