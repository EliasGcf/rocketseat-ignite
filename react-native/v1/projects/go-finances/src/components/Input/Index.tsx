import React from 'react';
import { TextInputProps } from 'react-native';

import { TextInput } from './styles';

export type InputProps = TextInputProps & {};

export function Input({ ...rest }: InputProps) {
  return <TextInput {...rest} />;
}
