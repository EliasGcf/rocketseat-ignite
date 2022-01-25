import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import { api } from '@services/api';

import { CarCard } from '@screens/Home/CarCard';

import { Loading } from '@components/Loading';
import { HomeHeaderText } from '@screens/Home/HomeHeaderText';
import { CarList, Container } from './styles';

export type Car = {
  id: string;
  brand: string;
  name: string;
  thumbnail: string;
  rent: {
    price: number;
  };
};

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState<Car[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadCars() {
      try {
        const response = await api.get('cars');

        setCars(response.data);

        navigation.setOptions({
          headerRight: () => <HomeHeaderText totalCars={response.data.length} />,
        });
      } catch (err) {
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
                onPress={() => navigation.navigate('CarDetails', {})}
                brand={car.brand}
                name={car.name}
                formattedPrice="R$ 120"
                imageUrl={car.thumbnail}
                categoryIconUrl="https://res.cloudinary.com/eliasgcf/image/upload/v1632354657/rentx/svg/energy_slf0c5.svg"
              />
            )}
          />
        </Container>
      )}
    </>
  );
}
