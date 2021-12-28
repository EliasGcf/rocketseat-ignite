import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from 'stitches.config';

import RentxLogo from '@assets/svg/rentx-logo.svg';

import { Home } from '@screens/Home';
import { HomeHeaderText } from '@screens/Home/HomeHeaderText';

import { CarDetails } from '@screens/CarDetails';

import { Scheduling } from '@screens/Scheduling';
import { HeaderGoBackButton } from '@components/HeaderGoBackButton';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      CarDetails: undefined;
      Scheduling: undefined;
    }
  }
}

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="CarDetails">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerTintColor: theme.colors['gray.500'],
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
          headerTintColor: theme.colors['gray.500'],
          headerLeft: HeaderGoBackButton,
          animation: 'slide_from_right',
        }}
      />

      <Stack.Screen
        name="Scheduling"
        component={Scheduling}
        options={{
          title: '',
          headerTintColor: '#fff',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: theme.colors.black },
          headerLeft: HeaderGoBackButton,
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
}
