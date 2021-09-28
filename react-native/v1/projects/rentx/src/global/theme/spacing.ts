import { scale } from 'react-native-size-matters';

const baseSpacing = {
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
  '64': 256,
  '72': 288,
  '80': 320,
  '96': 384,
} as const;

const responsiveSpacing = Object.keys(baseSpacing).reduce((acc, key) => {
  acc[key as keyof typeof baseSpacing] = scale(
    baseSpacing[key as keyof typeof baseSpacing],
  );
  return acc;
}, {} as { -readonly [key in keyof typeof baseSpacing]: number });

export const spacing = {
  ...baseSpacing,
  responsive: responsiveSpacing,
} as const;
