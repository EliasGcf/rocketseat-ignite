import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import {
  Button,
  ButtonText,
  Container,
  DoneSvg,
  Message,
  Title,
  XLogoSvg,
} from './styles';

export function SchedulingComplete() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar style="light" />

      <Container>
        <XLogoSvg />
        <DoneSvg />

        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir{'\n'}
          até a concessionária da RENTX{'\n'}
          pegar o seu automóvel.
        </Message>

        <Button onPress={() => navigation.reset({ routes: [{ name: 'Home' }] })}>
          <ButtonText>Ok</ButtonText>
        </Button>
      </Container>
    </>
  );
}
