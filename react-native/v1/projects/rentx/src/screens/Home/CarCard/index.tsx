import React from 'react';
import { SvgProps } from 'react-native-svg';

import { Column } from '@components/utils/Column';
import { LabelText } from '@components/LabelText';

import { CarImage, CarName, CarPriceText, Container, Footer, Main } from './styles';

export type CarCardProps = {
  brand: string;
  name: string;
  formattedPrice: string;
  CategoryIcon: React.FC<SvgProps>;
  imageUrl: string;
  onPress?: () => void;
};

export function CarCard({
  brand,
  name,
  formattedPrice,
  CategoryIcon,
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

          <CategoryIcon
            width={20}
            height={20}
            fill="#AEAEB3"
            style={{ marginLeft: 24 }}
          />
        </Footer>
      </Main>

      <CarImage source={{ uri: imageUrl }} />
    </Container>
  );
}
