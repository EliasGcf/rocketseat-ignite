const fonts = {
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

export const theme = {
  fonts: {
    ...fonts,
  },
} as const;
