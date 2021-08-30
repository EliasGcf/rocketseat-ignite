import React from 'react';

import { Container, Content, Header, HeaderTitle } from './styles';

import { Input } from '@components/Input/Index';

export function RegisterTransaction() {
  return (
    <Container>
      <Header>
        <HeaderTitle>Cadastro</HeaderTitle>
      </Header>

      <Content>
        <Input style={{ marginBottom: 8 }} placeholder="Nome" />
        <Input placeholder="Preço" />
      </Content>
    </Container>
  );
}
