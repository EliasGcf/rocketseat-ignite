import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { LabelText } from '@components/LabelText';

import {
  Container,
  Content,
  Title,
  WrapperDateInfo,
  DateInfo,
  DateText,
  Arrow,
} from './styles';

export function Scheduling() {
  const startDate = '18/06/2021';
  const endDate = '18/06/2021';

  return (
    <>
      <StatusBar style="light" />

      <Container>
        <Content>
          <Title>
            Escolha uma{'\n'}data de início e{'\n'}fim do aluguel
          </Title>

          <WrapperDateInfo>
            <DateInfo>
              <LabelText>de</LabelText>
              <DateText value={startDate} />
            </DateInfo>

            <Arrow />

            <DateInfo>
              <LabelText>até</LabelText>
              <DateText value={endDate} />
            </DateInfo>
          </WrapperDateInfo>
        </Content>
      </Container>
    </>
  );
}
