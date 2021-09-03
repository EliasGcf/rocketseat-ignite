/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

import { categories } from '@utils/categories';
import { View } from 'react-native';

type CategoryPickerProps = {
  selectedCategory: string;
  onPickerChange: (value: string) => void;
};

export function CategoryPicker({
  selectedCategory,
  onPickerChange,
}: CategoryPickerProps) {
  const theme = useTheme();

  function handlePickerChange(value: string) {
    if (selectedCategory === value) return;

    onPickerChange(value);
  }

  const commonInputStyle = {
    fontSize: 14,
    height: 56,
    backgroundColor: theme.colors.shape,
    borderRadius: 5,
    color: theme.colors.title,
    paddingLeft: 48,
    paddingRight: 16,
    lineHeight: 14 * 1.4,
    fontFamily: theme.fonts.poppins.regular,
  };

  return (
    <RNPickerSelect
      style={{
        chevronUp: { display: 'none' },
        chevronDown: { display: 'none' },
        placeholder: {
          color: theme.colors.text,
        },
        inputIOS: {
          ...commonInputStyle,
        },
        iconContainer: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
        inputAndroid: {
          ...commonInputStyle,
        },
      }}
      items={categories.map(category => {
        return {
          label: category.name,
          value: category.key,
          color: theme.colors.title,
        };
      })}
      value={selectedCategory}
      pickerProps={{ mode: 'dropdown' }}
      onValueChange={handlePickerChange}
      useNativeAndroidPickerStyle={false}
      placeholder={{ label: 'Categoria', value: '', color: theme.colors.text }}
      Icon={() => (
        <View
          style={{
            flex: 1,
            paddingLeft: 16,
            paddingRight: 8,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {selectedCategory === '' ? (
            <Feather size={20} name="tag" color={theme.colors.text} />
          ) : (
            <Feather
              size={20}
              name={categories.find(category => category.key === selectedCategory)?.icon}
              color={theme.colors.title}
            />
          )}
          <Feather size={20} name="chevron-down" color={theme.colors.text} />
        </View>
      )}
    />
  );
}
