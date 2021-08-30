import React from 'react';
import { View } from 'react-native';

import { Button, ButtonText, Container, Content, Header, HeaderTitle } from './styles';

import { Input } from '@components/Input';

export function RegisterTransaction() {
  return (
    <Container>
      <Header>
        <HeaderTitle>Cadastro</HeaderTitle>
      </Header>

      <Content>
        <View>
          <Input style={{ marginBottom: 8 }} placeholder="Nome" />
          <Input placeholder="Preço" />
        </View>

        <Button>
          <ButtonText>Enviar</ButtonText>
        </Button>
      </Content>
    </Container>
  );
}
