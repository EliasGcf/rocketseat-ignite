import React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTExtInputProps,
} from 'react-native';

type TextInputProps = RNTExtInputProps & {
  hasError?: boolean;
};

export function TextInput({ hasError = false, style, ...rest }: TextInputProps) {
  return (
    <RNTextInput
      style={[styles.input, hasError ? styles.inputWithError : {}, style]}
      placeholderTextColor="#555"
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: 15,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: '#1F1E25',
  },
  inputWithError: {
    borderWidth: 1.5,
    borderColor: '#E83F5B',
  },
});
