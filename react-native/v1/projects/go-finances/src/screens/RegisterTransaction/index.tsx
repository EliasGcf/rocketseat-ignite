import React, { useState } from 'react';
import { View } from 'react-native';

import { Input } from '@components/Input';
import { TransactionTypeButton } from '@components/TransactionTypeButton';

import {
  Button,
  ButtonText,
  Container,
  Content,
  Header,
  HeaderTitle,
  TypeButtonsWrapper,
} from './styles';

export function RegisterTransaction() {
  const [transactionType, setTransactionType] = useState<'income' | 'outcome' | ''>('');

  return (
    <Container>
      <Header>
        <HeaderTitle>Cadastro</HeaderTitle>
      </Header>

      <Content>
        <View>
          <Input style={{ marginBottom: 8 }} placeholder="Nome" />
          <Input placeholder="Preço" />

          <TypeButtonsWrapper>
            <TransactionTypeButton
              type="income"
              isChecked={transactionType === 'income'}
              onPress={() => setTransactionType('income')}
            />
            <View style={{ width: 8 }} />
            <TransactionTypeButton
              type="outcome"
              isChecked={transactionType === 'outcome'}
              onPress={() => setTransactionType('outcome')}
            />
          </TypeButtonsWrapper>
        </View>

        <Button>
          <ButtonText>Enviar</ButtonText>
        </Button>
      </Content>
    </Container>
  );
}
