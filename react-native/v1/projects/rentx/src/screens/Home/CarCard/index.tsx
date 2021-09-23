import React from 'react';

import { Row } from '@components/utils/Row';
import { Column } from '@components/utils/Column';
import { LabelText } from '@components/LabelText';

import {
  CarCategoryIconUri,
  CarImage,
  CarName,
  CarPrice,
  CarPriceText,
  Container,
  Main,
} from './styles';

export type CarCardProps = {
  brand: string;
  name: string;
  formattedPrice: string;
  categoryIconUrl: string;
  imageUrl: string;
};

export function CarCard({
  brand,
  name,
  formattedPrice,
  categoryIconUrl,
  imageUrl,
}: CarCardProps) {
  return (
    <Container>
      <Main>
        <Column>
          <LabelText>{brand}</LabelText>
          <CarName>{name}</CarName>
        </Column>

        <Row>
          <CarPrice>
            <LabelText>ao dia</LabelText>
            <CarPriceText>{formattedPrice}</CarPriceText>
          </CarPrice>

          <CarCategoryIconUri uri={categoryIconUrl} />
        </Row>
      </Main>

      <CarImage source={{ uri: imageUrl }} />
    </Container>
  );
}
