import React from 'react';
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

        <Button>
          <ButtonText>Ok</ButtonText>
        </Button>
      </Container>
    </>
  );
}
