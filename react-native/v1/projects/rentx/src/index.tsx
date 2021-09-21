import React from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Archivo_500Medium,
  Archivo_400Regular,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';

import { theme } from '@global/styles/theme';

export function RentxApp() {
  const [isFontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,

    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <View />
    </ThemeProvider>
  );
}
