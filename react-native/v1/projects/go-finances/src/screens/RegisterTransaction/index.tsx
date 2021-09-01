import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import { Form } from '@screens/RegisterTransaction/Form';
import { Header } from '@screens/RegisterTransaction/Header';

import { Container } from './styles';

export function RegisterTransaction() {
  const [isKeyboardOpened, setIsKeyboardOpened] = useState(false);

  useEffect(() => {
    function handleKeyboardOpen() {
      setIsKeyboardOpened(true);
    }

    function handleKeyboardClose() {
      setIsKeyboardOpened(false);
    }

    Keyboard.addListener('keyboardDidShow', handleKeyboardOpen);
    Keyboard.addListener('keyboardDidHide', handleKeyboardClose);

    return () => {
      Keyboard.removeListener('keyboardDidShow', handleKeyboardOpen);
      Keyboard.removeListener('keyboardDidHide', handleKeyboardClose);
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header />
          <ScrollView
            scrollEnabled={isKeyboardOpened}
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <Form />
          </ScrollView>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
