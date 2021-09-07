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
import { ToastProvider } from 'react-native-toast-notifications';

import { theme } from '@global/styles/theme';
import { TransactionsContextProvider } from '@contexts/Transactions/Provider';

import { Routes } from '@routes/index.routes';
import { AuthContextProvider } from '@contexts/Auth/Provider';

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
      <ToastProvider
        offsetTop={50}
        textStyle={{
          color: theme.colors.shape,
          fontFamily: theme.fonts.poppins.medium,
        }}
        successColor={theme.colors.success}
        dangerColor={theme.colors.attention}
      >
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />

        <AuthContextProvider>
          <TransactionsContextProvider>
            <Routes />
          </TransactionsContextProvider>
        </AuthContextProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
