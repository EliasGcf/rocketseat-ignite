import React from 'react';

import { formatCurrency } from '@utils/formatCurrency';
import { HighlightCard } from '@components/HighlightCard';

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

export function Header() {
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
              value: formatCurrency(17400),
              description: 'Última entrada dia 13 de abril',
            }}
          />
          <HighlightCard
            type="outcome"
            hasMarginRight
            data={{
              value: formatCurrency(1259),
              description: 'Última saída dia 03 de abril',
            }}
          />
          <HighlightCard
            type="total"
            data={{ value: formatCurrency(17400), description: '01 à 16 de abril' }}
          />
        </HighlightCards>
      </HighlightCardsWrapper>
    </Container>
  );
}
