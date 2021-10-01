import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import SpeedSvg from '@assets/svg/speed.svg';

import { Button } from '@components/Button';
import { Column } from '@components/utils/Column';
import { LabelText } from '@components/LabelText';

import { HeaderRightItem } from '@screens/CarDetails/HeaderRightItem';
import { SpecificationCard } from '@screens/CarDetails/SpecificationCard';

import {
  CarImage,
  CarInfo,
  CarName,
  CarPrice,
  Container,
  ContentListWrapper,
  ContentList,
  Description,
  Footer,
  ImageContainer,
  Main,
} from './styles';

const specifications = [1, 2, 3, 4, 5, 6];

export function CarDetails() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRightItem dotsQuantity={4} selectedIndex={2} />,
    });
  }, [navigation]);

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

          <ContentListWrapper>
            <ContentList
              data={specifications}
              keyExtractor={(item) => String(item)}
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
                    title="380km/h"
                    icon={SpeedSvg}
                    style={{ marginRight: shouldHaveMarginRight ? 8 : 0 }}
                  />
                );
              }}
            />
          </ContentListWrapper>
        </Main>

        <Footer>
          <Button title="Escolher período do aluguel" />
        </Footer>
      </Container>
    </>
  );
}
