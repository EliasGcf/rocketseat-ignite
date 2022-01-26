import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import {
  Archivo_500Medium,
  Archivo_400Regular,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Routes } from '@routes/index.routes';

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

  return <Routes />;
}
