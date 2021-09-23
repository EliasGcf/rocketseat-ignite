import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { CarCard } from '@screens/Home/CarCard';

import { Container } from './styles';

export function Home() {
  return (
    <>
      <StatusBar style="light" />

      <Container>
        <CarCard
          brand="audi"
          name="RS 5 Coupé"
          formattedPrice="R$ 120"
          imageUrl="https://res.cloudinary.com/eliasgcf/image/upload/v1632353816/Audi_fadfhy.png"
          categoryIconUrl="https://res.cloudinary.com/eliasgcf/image/upload/v1632354657/rentx/svg/energy_slf0c5.svg"
        />
      </Container>
    </>
  );
}
