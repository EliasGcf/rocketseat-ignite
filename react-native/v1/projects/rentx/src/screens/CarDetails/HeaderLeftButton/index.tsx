import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { ButtonContainer } from './styles';

export function HeaderLeftButton() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <ButtonContainer onPress={navigation.goBack}>
      <Feather name="chevron-left" size={24} color={theme.colors.aliases.text} />
    </ButtonContainer>
  );
}
