import React from 'react';
import { TouchableOpacity } from 'react-native';

import { HighlightCard } from '@components/HighlightCard';

import { formatCurrency } from '@utils/formatCurrency';

import {
  Container,
  Header,
  UserAvatar,
  UserInfo,
  UserGreeting,
  UserName,
  UserTextContainer,
  PowerIcon,
  HighlightCards,
  HighlightCardsWrapper,
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserInfo>
          <UserAvatar source={{ uri: 'https://github.com/EliasGcf.png' }} />

          <UserTextContainer>
            <UserGreeting>Olá,</UserGreeting>
            <UserName>Elias Gabriel</UserName>
          </UserTextContainer>

          <TouchableOpacity style={{ marginLeft: 'auto' }} activeOpacity={0.7}>
            <PowerIcon />
          </TouchableOpacity>
        </UserInfo>
      </Header>

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
