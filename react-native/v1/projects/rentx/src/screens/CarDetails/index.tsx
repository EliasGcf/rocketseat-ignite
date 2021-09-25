import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Column } from '@components/utils/Column';
import { LabelText } from '@components/LabelText';

import {
  CarImage,
  CarInfo,
  CarName,
  CarPrice,
  Container,
  Description,
  Footer,
  ImageContainer,
  Main,
  SubmitButton,
  SubmitButtonText,
} from './styles';

export function CarDetails() {
  return (
    <>
      <StatusBar style="dark" />

      <Container>
        <ImageContainer>
          <CarImage
            source={{
              uri: 'https://res.cloudinary.com/eliasgcf/image/upload/v1632602453/rentx/Lambo_dmkt4f.png',
            }}
          />
        </ImageContainer>

        <Main>
          <CarInfo>
            <Column>
              <LabelText>Lamborghini</LabelText>
              <CarName>Huracan</CarName>
            </Column>

            <Column>
              <LabelText>Ao dia</LabelText>
              <CarPrice>R$ 580</CarPrice>
            </Column>
          </CarInfo>

          <Description>
            Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na
            praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de
            acelerar.
          </Description>
        </Main>

        <Footer>
          <SubmitButton>
            <SubmitButtonText>Escolher período do aluguel</SubmitButtonText>
          </SubmitButton>
        </Footer>
      </Container>
    </>
  );
}
