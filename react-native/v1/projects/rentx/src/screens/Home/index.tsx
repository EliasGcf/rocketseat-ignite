import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import { CarCard } from '@screens/Home/CarCard';

import { Container } from './styles';

export function Home() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar style="light" />

      <Container>
        <CarCard
          onPress={() => navigation.navigate('CarDetails', {})}
          brand="audi"
          name="RS 5 Coupé"
          formattedPrice="R$ 120"
          imageUrl="https://res.cloudinary.com/eliasgcf/image/upload/v1632353816/rentx/Audi_fadfhy.png"
          categoryIconUrl="https://res.cloudinary.com/eliasgcf/image/upload/v1632354657/rentx/svg/energy_slf0c5.svg"
        />
      </Container>
    </>
  );
}
