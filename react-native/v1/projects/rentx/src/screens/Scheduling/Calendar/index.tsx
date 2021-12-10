import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Calendar as RNCalendar, LocaleConfig } from 'react-native-calendars';

import { theme } from 'stitches.config';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: ['Doming', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
};

LocaleConfig.defaultLocale = 'pt-br';

export function Calendar() {
  return (
    <RNCalendar
      theme={{
        textDayFontFamily: theme.fonts['inter.regular'],
        textDayFontSize: 15,
        textDayHeaderFontFamily: theme.fonts['archivo.semiBold'],
        textDayHeaderFontSize: 10,
        monthTextColor: theme.colors['gray.600'],
        textMonthFontFamily: theme.fonts['archivo.semiBold'],
        textMonthFontSize: 20,
        selectedDayTextColor: theme.colors['brand.mid'],
      }}
      headerStyle={{
        borderBottomWidth: theme.space['responsive.px'],
        borderBottomColor: theme.colors['gray.200'],
        paddingBottom: 8,
        marginBottom: 20,
      }}
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.colors['gray.500']}
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      )}
      firstDay={1}
      minDate={new Date()}
    />
  );
}
