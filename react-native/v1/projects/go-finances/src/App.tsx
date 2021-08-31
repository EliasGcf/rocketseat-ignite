import React from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { theme } from '@global/styles/theme';

import { Dashboard } from '@screens/Dashboard';
import { RegisterTransaction } from '@screens/RegisterTransaction';

export function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
      {/* <Dashboard /> */}
      <RegisterTransaction />
    </ThemeProvider>
  );
}
