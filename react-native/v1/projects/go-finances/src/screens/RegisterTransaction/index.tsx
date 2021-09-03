import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { Form } from '@screens/RegisterTransaction/Form';

import { Container } from './styles';

export function RegisterTransaction() {
  const tabBarHeight = useBottomTabBarHeight();

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
      keyboardVerticalOffset={tabBarHeight}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
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
