import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export function Button({ style, text, ...rest }) {
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
