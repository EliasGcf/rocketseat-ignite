import React, { useCallback, useState } from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useFocusEffect } from '@react-navigation/native';

import { formatCurrency } from '@utils/formatCurrency';
import { HighlightCard } from '@components/HighlightCard';

import { Balance, useTransactions } from '@hooks/useTransactions';

import {
  Container,
  UserInfo,
  UserAvatar,
  UserTextContainer,
  UserGreeting,
  UserName,
  PowerIconButton,
  PowerIcon,
  HighlightCardsWrapper,
  HighlightCards,
} from './styles';

type HeaderBalance = Balance & {
  formattedIncoming: string;
  formattedOutcome: string;
  formattedTotal: string;
  incomeDescription: string;
  outcomeDescription: string;
  totalDescription: string;
};

export function Header() {
  const { getBalance } = useTransactions();

  const [balance, setBalance] = useState<HeaderBalance | null>(null);

  const loadBalance = useCallback(async () => {
    const storageBalance = await getBalance();

    const incomeDescription = storageBalance.income.lastDate
      ? format(storageBalance.income.lastDate, "'Última entrada dia' dd 'de' MMMM", {
          locale: ptBR,
        })
      : 'Não há entradas';

    const outcomeDescription = storageBalance.outcome.lastDate
      ? format(storageBalance.outcome.lastDate, "'Última entrada dia' dd 'de' MMMM", {
          locale: ptBR,
        })
      : 'Não há saídas';

    const balanceData: HeaderBalance = {
      ...storageBalance,
      incomeDescription,
      outcomeDescription,
      totalDescription: '',
      formattedIncoming: formatCurrency(storageBalance.income.amount),
      formattedOutcome: formatCurrency(storageBalance.outcome.amount),
      formattedTotal: formatCurrency(storageBalance.total.amount),
    };

    if (!storageBalance.total.firstDate || !storageBalance.total.lastDate) {
      balanceData.totalDescription = 'Não há entradas ou saídas';
      setBalance(balanceData);
      return;
    }

    if (
      storageBalance.total.firstDate.getDate() === storageBalance.total.lastDate.getDate()
    ) {
      balanceData.totalDescription = format(
        storageBalance.total.firstDate,
        "'apenas dia' dd 'de' MMMM",
        { locale: ptBR },
      );
      setBalance(balanceData);
      return;
    }

    balanceData.totalDescription = `${format(
      storageBalance.total.firstDate,
      "dd 'de' MMMM",
      { locale: ptBR },
    )} até ${format(storageBalance.total.lastDate, "dd 'de' MMMM", { locale: ptBR })}`;

    setBalance(balanceData);
  }, [getBalance]);

  useFocusEffect(
    useCallback(() => {
      loadBalance();
    }, [loadBalance]),
  );

  return (
    <Container>
      <UserInfo>
        <UserAvatar source={{ uri: 'https://github.com/EliasGcf.png' }} />

        <UserTextContainer>
          <UserGreeting>Olá,</UserGreeting>
          <UserName>Elias Gabriel</UserName>
        </UserTextContainer>

        <PowerIconButton>
          <PowerIcon />
        </PowerIconButton>
      </UserInfo>

      <HighlightCardsWrapper>
        <HighlightCards>
          <HighlightCard
            type="income"
            hasMarginRight
            data={{
              value: balance?.formattedIncoming || '',
              description: balance?.incomeDescription || '',
            }}
          />
          <HighlightCard
            type="outcome"
            hasMarginRight
            data={{
              value: balance?.formattedOutcome || '',
              description: balance?.outcomeDescription || '',
            }}
          />
          <HighlightCard
            type="total"
            data={{
              value: balance?.formattedTotal || '',
              description: balance?.totalDescription || '',
            }}
          />
        </HighlightCards>
      </HighlightCardsWrapper>
    </Container>
  );
}
