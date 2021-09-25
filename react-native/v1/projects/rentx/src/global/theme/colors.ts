const gray100 = '#F4F5F6';
const gray200 = '#EBEBF0';
const gray300 = '#DEDEE3';
const gray400 = '#AEAEB3';
const gray500 = '#7A7A80';
const gray600 = '#47474D';

const availableColors = {
  brand: {
    light: '#FDEDEF',
    mid: '#DC1637',
  },

  success: {
    light: '#DAF3E5',
    mid: '#03B252',
  },

  white: '#FFFFFF',
  black: '#1B1B1F',

  gray: {
    '100': gray100,
    '200': gray200,
    '300': gray300,
    '400': gray400,
    '500': gray500,
    '600': gray600,
  },
} as const;

export const colors = {
  ...availableColors,
  aliases: {
    label: availableColors.gray[400],
    title: availableColors.gray[600],
    background: availableColors.gray[100],
  },
} as const;
