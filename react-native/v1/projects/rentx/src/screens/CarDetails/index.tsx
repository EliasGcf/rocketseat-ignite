import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import { carSpecificationsIcons } from '@utils/carSpecificationsIcons';

import { Button } from '@components/Button';
import { Column } from '@components/utils/Column';
import { LabelText } from '@components/LabelText';

import { HeaderRightItem } from '@screens/CarDetails/HeaderRightItem';
import { SpecificationCard } from '@screens/CarDetails/SpecificationCard';
import { ScheduleDetails } from '@screens/CarDetails/ScheduleDetails';

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

export type CarDetailsRouteParams = {
  startDate?: string;
  endDate?: string;
  car: {
    name: string;
    brand: string;
    about: string;
    thumbnail: string;
    photos: string[];
    formattedPrice: string;
    specifications: Array<{ type: string; name: string }>;
  };
};

type CarDetailsProps = {
  route: {
    params: CarDetailsRouteParams;
  };
};

export function CarDetails({ route }: CarDetailsProps) {
  const navigation = useNavigation();

  const { startDate, endDate, car } = route.params;

  const hasRentTime = !!startDate && !!endDate;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRightItem dotsQuantity={car.photos.length} selectedIndex={0} />
      ),
    });
  }, [navigation, car.photos.length]);

  function handleFooterButtonPress() {
    if (hasRentTime) {
      navigation.reset({ routes: [{ name: 'SchedulingComplete' }] });
    } else {
      navigation.navigate('Scheduling');
    }
  }

  return (
    <>
      <StatusBar style="dark" />

      <Container>
        <ImageContainer>
          <CarImage source={{ uri: car.photos[0] }} />
        </ImageContainer>

        <Main>
          <CarInfo>
            <Column>
              <LabelText>{car.brand}</LabelText>
              <CarName>{car.name}</CarName>
            </Column>

            <Column>
              <LabelText>Ao dia</LabelText>
              <CarPrice>{car.formattedPrice}</CarPrice>
            </Column>
          </CarInfo>

          <ContentListWrapper>
            <ContentList
              data={car.specifications}
              keyExtractor={(item) => String(item.type)}
              ListFooterComponent={() => {
                return hasRentTime ? (
                  <ScheduleDetails startDate={startDate} endDate={endDate} />
                ) : (
                  <Description>{car.about}</Description>
                );
              }}
              renderItem={({ item, index }) => {
                const isLastItemOfRow = index % 3 === 2;
                const isLastItemOfTotal = index === car.specifications.length - 1;
                const shouldHaveMarginRight = !isLastItemOfRow && !isLastItemOfTotal;

                return (
                  <SpecificationCard
                    title={item.name}
                    icon={carSpecificationsIcons[item.type]}
                    style={{ marginRight: shouldHaveMarginRight ? 8 : 0 }}
                  />
                );
              }}
            />
          </ContentListWrapper>
        </Main>

        <Footer hasRentTime={hasRentTime}>
          <Button
            title={hasRentTime ? 'Alugar agora' : 'Escolher período do aluguel'}
            variant={hasRentTime ? 'success' : 'primary'}
            onPress={handleFooterButtonPress}
          />
        </Footer>
      </Container>
    </>
  );
}
