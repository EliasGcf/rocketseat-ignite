import React, { ForwardedRef, forwardRef } from 'react';
import { TextInputProps, TextInput as RNTextInput } from 'react-native';

import { TextInput } from './styles';

export type InputProps = TextInputProps & {};

export const Input = forwardRef(
  ({ ...rest }: InputProps, inputRef: ForwardedRef<RNTextInput>) => {
    return <TextInput {...rest} ref={inputRef} />;
  },
);
