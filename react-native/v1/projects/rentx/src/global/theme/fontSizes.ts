import { scale } from 'react-native-size-matters';

const baseFontSizes = {
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

const responsiveFontSizes = Object.keys(baseFontSizes).reduce((acc, key) => {
  acc[key as keyof typeof baseFontSizes] = scale(
    baseFontSizes[key as keyof typeof baseFontSizes],
  );
  return acc;
}, {} as { -readonly [key in keyof typeof baseFontSizes]: number });

export const fontSizes = {
  ...baseFontSizes,
  responsive: responsiveFontSizes,
} as const;
