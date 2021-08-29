import React from 'react';
import { useTheme } from 'styled-components';
import { StatusBar, TouchableOpacity } from 'react-native';

import {
  Container,
  Header,
  UserAvatar,
  UserInfo,
  UserGreeting,
  UserName,
  UserTextContainer,
  PowerIcon,
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
    </Container>
  );
}
