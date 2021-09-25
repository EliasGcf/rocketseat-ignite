import React from 'react';
import { useTheme } from 'styled-components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RentxLogo from '@assets/svg/rentx-logo.svg';

import { Home } from '@screens/Home';
import { HomeHeaderText } from '@screens/Home/HomeHeaderText';

import { CarDetails } from '@screens/CarDetails';
import { HeaderLeftButton } from '@screens/CarDetails/HeaderLeftButton';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerTintColor: theme.colors.gray[500],
          headerStyle: { backgroundColor: theme.colors.black },
          headerRight: HomeHeaderText,
          headerLeft: () => <RentxLogo />,
        }}
      />

      <Stack.Screen
        name="CarDetails"
        component={CarDetails}
        options={{
          title: '',
          headerShadowVisible: false,
          headerLeft: HeaderLeftButton,
        }}
      />
    </Stack.Navigator>
  );
}
