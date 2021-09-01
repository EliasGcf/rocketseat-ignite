import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

import { Form } from '@screens/RegisterTransaction/Form';
import { Header } from '@screens/RegisterTransaction/Header';

import { Container } from './styles';

export function RegisterTransaction() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header />
          <Form />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
