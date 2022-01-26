import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { Button } from '@components/Button';
import { LabelText } from '@components/LabelText';

import { Calendar } from '@screens/Scheduling/Calendar';

import {
  Container,
  Header,
  Title,
  WrapperDateInfo,
  DateInfo,
  DateText,
  Arrow,
  Footer,
} from './styles';

export function Scheduling() {
  const navigation = useNavigation();

  const startDate = '18/06/2021';
  const endDate = '18/06/2021';

  return (
    <>
      <StatusBar style="light" />

      <Container>
        <Header>
          <Title>
            Escolha uma{'\n'}data de início e{'\n'}fim do aluguel
          </Title>

          <WrapperDateInfo>
            <DateInfo>
              <LabelText>de</LabelText>
              <DateText editable={false} value={startDate} isField={!!startDate} />
            </DateInfo>

            <Arrow />

            <DateInfo>
              <LabelText>até</LabelText>
              <DateText editable={false} value={endDate} isField={!!endDate} />
            </DateInfo>
          </WrapperDateInfo>
        </Header>

        <Calendar />

        <Footer>
          <Button
            title="Confirmar"
            enabled={!!startDate && !!endDate}
            onPress={() => navigation.navigate('CarDetails', { startDate, endDate })}
          />
        </Footer>
      </Container>
    </>
  );
}
