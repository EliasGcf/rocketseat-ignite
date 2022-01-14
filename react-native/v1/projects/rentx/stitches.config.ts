import { scale } from 'react-native-size-matters';
import { createStitches } from 'stitches-native';

export const spaces = {
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
  '23': 92,
  '24': 96,
  '28': 112,
  '32': 128,
  '36': 144,
  '40': 160,
  '44': 176,
  '48': 192,
  '56': 224,
  '58': 235,
  '64': 256,
  '72': 288,
  '80': 320,
  '93': 375,
  '96': 384,
} as const;

type ResponsiveSpaceType = `responsive.${keyof typeof spaces}`;

export const responsiveSpaces = Object.keys(spaces).reduce((acc, space) => {
  const typedSpace = space as keyof typeof spaces;

  const key = `responsive.${typedSpace}` as const;

  acc[key] = scale(spaces[typedSpace]);

  return acc;
}, {} as { -readonly [key in ResponsiveSpaceType]: number });

export const fontSizes = {
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

type ResponsiveFontSizeType = `responsive.${keyof typeof fontSizes}`;

export const responsiveFontSizes = Object.keys(fontSizes).reduce((acc, fontSize) => {
  const typedFontSize = fontSize as keyof typeof fontSizes;

  const key = `responsive.${typedFontSize}` as const;

  acc[key] = scale(fontSizes[typedFontSize]);

  return acc;
}, {} as { -readonly [key in ResponsiveFontSizeType]: number });

export const {
  styled,
  config: { theme },
} = createStitches({
  theme: {
    colors: {
      'brand.light': '#FDEDEF',
      'brand.mid': '#DC1637',

      'success.light': '#DAF3E5',
      'success.mid': '#03B252',

      white: '#FFFFFF',
      black: '#1B1B1F',

      'gray.100': '#F4F5F6',
      'gray.200': '#EBEBF0',
      'gray.300': '#DEDEE3',
      'gray.400': '#AEAEB3',
      'gray.500': '#7A7A80',
      'gray.600': '#47474D',
      'gray.800': '#29292E',

      text: '$gray.500',
      label: '$gray.400',
      title: '$gray.600',
      background: '$gray.100',
    },

    fonts: {
      'inter.regular': 'Inter_400Regular',
      'inter.medium': 'Inter_500Medium',

      'archivo.regular': 'Archivo_400Regular',
      'archivo.medium': 'Archivo_500Medium',
      'archivo.semiBold': 'Archivo_600SemiBold',

      label: '$archivo.medium',
      text: '$inter.regular',
      title: '$archivo.medium',
      button: '$inter.medium',
    },

    fontSizes: {
      ...fontSizes,
      ...responsiveFontSizes,
    },

    sizes: {
      ...spaces,
      ...responsiveSpaces,
    },

    space: {
      ...spaces,
      ...responsiveSpaces,
    },

    borderWidths: {
      ...spaces,
      ...responsiveSpaces,
    },

    lineHeights: {
      ...spaces,
      ...responsiveSpaces,
    },
  },
});
