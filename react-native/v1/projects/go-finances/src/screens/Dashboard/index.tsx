import React from 'react';
import { useTheme } from 'styled-components';
import { ScrollView, StatusBar, TouchableOpacity } from 'react-native';

import { HighlightCard } from '@components/HighlightCard';

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
} from './styles';

export function Dashboard() {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
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

      <HighlightCards>
        <HighlightCard
          type="income"
          hasMarginRight
          data={{ value: 17400, description: 'Última entrada dia 13 de abril' }}
        />
        <HighlightCard
          type="outcome"
          hasMarginRight
          data={{ value: 1259, description: 'Última saída dia 03 de abril' }}
        />
        <HighlightCard
          type="total"
          data={{ value: 17400, description: '01 à 16 de abril' }}
        />
      </HighlightCards>
    </Container>
  );
}
