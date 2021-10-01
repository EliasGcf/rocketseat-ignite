import React from 'react';

import { Row } from '@components/utils/Row';

import { Dot } from './styles';

type HeaderRightItemProps = {
  dotsQuantity: number;
  selectedIndex: number;
};

export function HeaderRightItem({ dotsQuantity, selectedIndex }: HeaderRightItemProps) {
  return (
    <Row>
      {Array.from({ length: dotsQuantity }, (_, index) => index).map((index) => {
        return (
          <Dot
            key={index}
            isActive={selectedIndex === index}
            shouldHaveSpacing={dotsQuantity - 1 !== index}
          />
        );
      })}
    </Row>
  );
}
