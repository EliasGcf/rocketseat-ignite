import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import { api } from '@services/api';

import { formatPrice } from '@utils/formatPrice';
import { carSpecificationsIcons } from '@utils/carSpecificationsIcons';

import { CarCard } from '@screens/Home/CarCard';

import { Loading } from '@components/Loading';
import { HomeHeaderText } from '@screens/Home/HomeHeaderText';

import { CarList, Container } from './styles';

export type Car = {
  id: string;
  brand: string;
  name: string;
  thumbnail: string;
  about: string;
  fuel_type: string;
  photos: string[];
  rent: { price: number };
  formattedPrice: string;
  specifications: Array<{ type: string; name: string }>;
};

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState<Car[]>([]);

  const navigation = useNavigation();

  function handleOnCardPress(car: Car) {
    navigation.navigate('CarDetails', {
      car: { ...car },
    });
  }

  useEffect(() => {
    async function loadCars() {
      try {
        const response = await api.get<Car[]>('cars');

        setCars(
          response.data.map((car) => ({
            ...car,
            formattedPrice: formatPrice(car.rent.price),
          })),
        );

        navigation.setOptions({
          headerRight: () => <HomeHeaderText totalCars={response.data.length} />,
        });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadCars();
  }, [navigation]);

  return (
    <>
      <StatusBar style="light" />

      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <CarList
            data={cars}
            keyExtractor={(car) => car.id}
            renderItem={({ item: car }) => (
              <CarCard
                key={car.id}
                onPress={() => handleOnCardPress(car)}
                brand={car.brand}
                name={car.name}
                formattedPrice={car.formattedPrice}
                imageUrl={car.thumbnail}
                CategoryIcon={carSpecificationsIcons[car.fuel_type]}
              />
            )}
          />
        </Container>
      )}
    </>
  );
}
