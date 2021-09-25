import { scale } from 'react-native-size-matters';

const responsive = (number: number) => scale(number);

const gray100 = '#F4F5F6';
const gray200 = '#EBEBF0';
const gray300 = '#DEDEE3';
const gray400 = '#AEAEB3';
const gray500 = '#7A7A80';
const gray600 = '#47474D';

const availableFonts = {
  inter: {
    regular: 'Inter_400Regular',
    medium: 'Inter_500Medium',
  },

  archivo: {
    regular: 'Archivo_400Regular',
    medium: 'Archivo_500Medium',
    semiBold: 'Archivo_600SemiBold',
  },
} as const;

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

const spacing = {
  '0': 0,
  px: 1,
  '1': 4,
  '2': 8,
  '3': 12,
  '4': 16,
  '5': 20,
  '6': 24,
  '7': 28,
  '8': 32,
  '9': 36,
  '10': 40,
  '12': 48,
  '14': 56,
  '16': 64,
  '20': 80,
  '24': 96,
  '28': 112,
  '32': 128,
  '36': 144,
  '40': 160,
  '44': 176,
  '48': 192,
  '56': 224,
  '64': 256,
  '72': 288,
  '80': 320,
  '96': 384,
} as const;

const responsiveSpacing = Object.keys(spacing).reduce((acc, key) => {
  acc[key as keyof typeof spacing] = responsive(spacing[key as keyof typeof spacing]);
  return acc;
}, {} as { -readonly [key in keyof typeof spacing]: number });

const fontSizes = {
  xxs: 10,
  xs: 12,
  sm: 14,
  md: 15,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
  '6xl': 64,
  '7xl': 80,
  '8xl': 120,
} as const;

const responsiveFontSizes = Object.keys(fontSizes).reduce((acc, key) => {
  acc[key as keyof typeof fontSizes] = responsive(
    fontSizes[key as keyof typeof fontSizes],
  );
  return acc;
}, {} as { -readonly [key in keyof typeof fontSizes]: number });

export const theme = {
  colors: {
    ...availableColors,
    aliases: {
      label: availableColors.gray[400],
      title: availableColors.gray[600],
      background: availableColors.gray[100],
    },
  },

  fonts: {
    ...availableFonts,
    aliases: {
      label: availableFonts.archivo.medium,
      text: availableFonts.inter.regular,
      title: availableFonts.archivo.medium,
    },
  },

  fontSizes: {
    ...fontSizes,
    responsive: responsiveFontSizes,
  },

  spacing: {
    ...spacing,
    responsive: responsiveSpacing,
  },
} as const;
