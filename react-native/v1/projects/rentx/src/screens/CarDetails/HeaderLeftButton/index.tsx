import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function HeaderLeftButton() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <BorderlessButton onPress={navigation.goBack}>
      <Feather name="chevron-left" size={24} color={theme.colors.aliases.text} />
    </BorderlessButton>
  );
}
