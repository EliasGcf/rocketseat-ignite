import React from 'react';
import { View } from 'react-native';

import { LabelText } from '@components/LabelText';

import {
  WrapperDateInfo,
  Calendar,
  DateInfo,
  DateText,
  DateRightArrow,
  AmountWrapper,
  MonthAmount,
  TotalAmount,
} from './styles';

type ScheduleDetailsProps = {
  startDate: string;
  endDate: string;
};

export function ScheduleDetails({ startDate, endDate }: ScheduleDetailsProps) {
  return (
    <>
      <WrapperDateInfo>
        <Calendar />

        <DateInfo>
          <LabelText>de</LabelText>
          <DateText editable={false} value={startDate} isField={!!startDate} />
        </DateInfo>

        <DateRightArrow />

        <DateInfo>
          <LabelText>de</LabelText>
          <DateText editable={false} value={endDate} isField={!!endDate} />
        </DateInfo>
      </WrapperDateInfo>

      <AmountWrapper>
        <View>
          <LabelText style={{ marginBottom: 8 }}>total</LabelText>
          <MonthAmount>R$ 580 x3 diárias</MonthAmount>
        </View>

        <TotalAmount>R$ 2,900</TotalAmount>
      </AmountWrapper>
    </>
  );
}
