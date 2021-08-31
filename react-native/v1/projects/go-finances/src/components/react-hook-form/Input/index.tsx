import React from 'react';
import { TextInputProps } from 'react-native';
import { Controller, Control } from 'react-hook-form';

import { Input } from '@components/Input';

type InputFormProps = TextInputProps & {
  name: string;
  control: Control<any>;
};

export function InputForm({ name, control, defaultValue, ...rest }: InputFormProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { value, onChange } }) => (
        <Input
          {...rest}
          value={value}
          onChangeText={onChange}
          defaultValue={defaultValue}
        />
      )}
    />
  );
}
