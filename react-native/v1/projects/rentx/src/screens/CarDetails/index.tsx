import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Column } from '@components/utils/Column';
import { LabelText } from '@components/LabelText';

import { SpecificationCard } from '@screens/CarDetails/SpecificationCard';

import { FlatList, View } from 'react-native';
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

const specifications = [1, 2, 3, 4, 5, 6];

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

          {/* To-do:
            - Move all the FlatList styling to styled-component in ./style.ts
          */}
          <View style={{ height: '100%' }}>
            <FlatList
              numColumns={3}
              data={specifications}
              style={{ marginTop: 16 }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => String(item)}
              ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
              ListFooterComponentStyle={{ marginTop: 24, paddingBottom: 24 }}
              ListFooterComponent={() => {
                return (
                  <Description>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide
                    indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
                    para quem gosta de acelerar.
                  </Description>
                );
              }}
              renderItem={({ index }) => {
                const isLastItemOfRow = index % 3 === 2;
                const isLastItemOfTotal = index === specifications.length - 1;
                const shouldHaveMarginRight = !isLastItemOfRow && !isLastItemOfTotal;

                return (
                  <SpecificationCard
                    style={{ marginRight: shouldHaveMarginRight ? 8 : 0 }}
                  />
                );
              }}
            />
          </View>
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
