import React from 'react';
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  text: string;
};

export function Button({ text, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.button, style]} {...rest}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
