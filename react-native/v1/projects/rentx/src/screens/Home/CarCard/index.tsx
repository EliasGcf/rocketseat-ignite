import React from 'react';

import { Column } from '@components/utils/Column';
import { LabelText } from '@components/LabelText';

import {
  CarCategoryIconUri,
  CarImage,
  CarName,
  CarPriceText,
  Container,
  Footer,
  Main,
} from './styles';

export type CarCardProps = {
  brand: string;
  name: string;
  formattedPrice: string;
  categoryIconUrl: string;
  imageUrl: string;
  onPress?: () => void;
};

export function CarCard({
  brand,
  name,
  formattedPrice,
  categoryIconUrl,
  imageUrl,
  onPress,
}: CarCardProps) {
  return (
    <Container onPress={onPress}>
      <Main>
        <Column>
          <LabelText>{brand}</LabelText>
          <CarName>{name}</CarName>
        </Column>

        <Footer>
          <Column>
            <LabelText>ao dia</LabelText>
            <CarPriceText>{formattedPrice}</CarPriceText>
          </Column>

          <CarCategoryIconUri uri={categoryIconUrl} />
        </Footer>
      </Main>

      <CarImage source={{ uri: imageUrl }} />
    </Container>
  );
}
