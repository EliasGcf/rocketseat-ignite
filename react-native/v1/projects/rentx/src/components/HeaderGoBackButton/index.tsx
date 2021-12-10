import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { ButtonContainer } from './styles';

type HeaderGoBackButtonProps = {
  tintColor?: string;
};

export function HeaderGoBackButton({ tintColor }: HeaderGoBackButtonProps) {
  const navigation = useNavigation();

  return (
    <ButtonContainer onPress={navigation.goBack}>
      <Feather name="chevron-left" size={24} color={tintColor} />
    </ButtonContainer>
  );
}
