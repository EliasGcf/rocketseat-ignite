import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from 'stitches.config';

import RentxLogo from '@assets/svg/rentx-logo.svg';

import { Home } from '@screens/Home';

import { CarDetails, CarDetailsRouteParams } from '@screens/CarDetails';

import { Scheduling } from '@screens/Scheduling';
import { HeaderGoBackButton } from '@components/HeaderGoBackButton';
import { SchedulingComplete } from '@screens/SchedulingComplete';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      CarDetails: CarDetailsRouteParams;
      Scheduling: undefined;
      SchedulingComplete: undefined;
    }
  }
}

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerStyle: { backgroundColor: theme.colors.black },
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

      <Stack.Screen
        name="SchedulingComplete"
        component={SchedulingComplete}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
