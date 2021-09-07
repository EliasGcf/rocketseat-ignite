import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '@hooks/useAuth';

import { AppRoutes } from '@routes/app.routes';
import { AuthRoutes } from '@routes/auth.routes';

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>{user ? <AppRoutes /> : <AuthRoutes />}</NavigationContainer>
  );
}
