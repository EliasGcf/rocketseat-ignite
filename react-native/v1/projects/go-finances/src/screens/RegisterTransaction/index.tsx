import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

const formSchemaValidation = yup.object().shape({
  name: yup.string().required('Nome é obrigatório.'),
  amount: yup.string().required('Preço é obrigatório.'),
});

export function RegisterTransaction() {
  const { control, handleSubmit, setFocus } = useForm<FormData>({
    resolver: yupResolver(formSchemaValidation),
  });

  const [transactionType, setTransactionType] = useState<'income' | 'outcome' | ''>('');
  const [category, setCategory] = useState('');

  function handleChangeTransactionType(type: 'income' | 'outcome') {
    setTransactionType(type);
  }

  async function handleAddTransaction(data: FormData) {
    console.log({ ...data, type: transactionType, category });
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                returnKeyType="next"
                autoCapitalize="sentences"
                style={{ marginBottom: 8 }}
                onSubmitEditing={() => setFocus('amount')}
              />

              <InputForm
                name="amount"
                defaultValue=""
                control={control}
                placeholder="Preço"
                returnKeyType="done"
                keyboardType="decimal-pad"
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
