import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '@screens/Dashboard';
import { RegisterTransaction } from '@screens/RegisterTransaction';

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarInactiveTintColor: theme.colors.text,
        tabBarActiveTintColor: theme.colors.secondary,
      }}
    >
      <Tab.Screen
        name="Listagem"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={RegisterTransaction}
        options={{
          headerTitle: 'Cadastro',
          headerTitleAlign: 'center',
          headerTintColor: theme.colors.shape,
          headerTitleStyle: {
            fontSize: 18,
            fontFamily: theme.fonts.poppins.regular,
          },
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          tabBarIcon: ({ color, size }) => (
            <Feather name="dollar-sign" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Resumo"
        component={View}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Resumo por categoria',
          headerTintColor: theme.colors.shape,
          headerTitleStyle: {
            fontSize: 18,
            fontFamily: theme.fonts.poppins.regular,
          },
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          tabBarIcon: ({ color, size }) => (
            <Feather name="pie-chart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
