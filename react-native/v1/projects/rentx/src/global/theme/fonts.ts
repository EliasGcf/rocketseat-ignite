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

export const fonts = {
  ...availableFonts,
  aliases: {
    label: availableFonts.archivo.medium,
    text: availableFonts.inter.regular,
    title: availableFonts.archivo.medium,
    button: availableFonts.inter.medium,
  },
} as const;
