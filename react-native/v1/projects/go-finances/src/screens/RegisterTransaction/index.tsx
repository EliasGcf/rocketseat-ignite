import React, { useState } from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';

import { InputForm } from '@components/react-hook-form/Input';
import { TransactionTypeButton } from '@components/TransactionTypeButton';

import { CategoryPicker } from '@screens/RegisterTransaction/CategoryPicker';

import {
  Button,
  ButtonText,
  Container,
  Content,
  Header,
  HeaderTitle,
  TypeButtonsWrapper,
} from './styles';

type FormData = {
  name: string;
  amount: string;
};

export function RegisterTransaction() {
  const { control, handleSubmit, formState } = useForm<FormData>();

  const [transactionType, setTransactionType] = useState<'income' | 'outcome' | ''>('');
  const [category, setCategory] = useState('');

  function handleChangeTransactionType(type: 'income' | 'outcome') {
    setTransactionType(type);
  }

  async function handleAddTransaction(data: FormData) {
    console.log({ ...data, type: transactionType, category });
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Cadastro</HeaderTitle>
      </Header>

      <Content>
        <View>
          <InputForm
            name="name"
            defaultValue=""
            control={control}
            placeholder="Nome"
            style={{ marginBottom: 8 }}
          />

          <InputForm
            name="amount"
            defaultValue=""
            control={control}
            placeholder="Preço"
            returnKeyType="done"
            keyboardType="number-pad"
          />

          <TypeButtonsWrapper>
            <TransactionTypeButton
              type="income"
              isChecked={transactionType === 'income'}
              onPress={() => handleChangeTransactionType('income')}
            />
            <View style={{ width: 8 }} />
            <TransactionTypeButton
              type="outcome"
              isChecked={transactionType === 'outcome'}
              onPress={() => handleChangeTransactionType('outcome')}
            />
          </TypeButtonsWrapper>

          <View style={{ marginTop: 16 }}>
            <CategoryPicker onPickerChange={setCategory} />
          </View>
        </View>

        <Button onPress={handleSubmit(handleAddTransaction)}>
          <ButtonText>Enviar</ButtonText>
        </Button>
      </Content>
    </Container>
  );
}
