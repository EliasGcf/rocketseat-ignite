import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';
import * as AppleAuthentication from 'expo-apple-authentication';

import { AuthContext, AuthContextData, User } from '@contexts/Auth/context';

const STORAGE_KEY = '@go-finances:user';

type AuthContextProviderProps = {
  children: ReactNode;
};

type OAuthGoogleResponse = {
  type: string;
  params: {
    access_token: string;
  };
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadUserFromStorage() {
      const storageUserData = await AsyncStorage.getItem(STORAGE_KEY);

      if (!storageUserData) return;

      const parsedUserData = JSON.parse(storageUserData);

      setUser(parsedUserData);
    }

    loadUserFromStorage();
  }, []);

  const signInWithGoogle = useCallback(async () => {
    try {
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const parameters = new URLSearchParams();

      parameters.append('client_id', process.env.OAUTH_GOOGLE_CLIENT_ID);
      parameters.append('redirect_uri', process.env.OAUTH_REDIRECT_URI);
      parameters.append('response_type', RESPONSE_TYPE);
      parameters.append('scope', SCOPE);

      const authorizationResponse = (await AuthSession.startAsync({
        authUrl: `${process.env.OAUTH_GOOGLE_URL}?${parameters.toString()}`,
      })) as OAuthGoogleResponse;

      if (authorizationResponse.type !== 'success') return;

      const userResponse = await fetch(
        `${process.env.OAUTH_GOOGLE_USER_INFO_URL}?alt=json&access_token=${authorizationResponse.params.access_token}`,
      );
      const userInfo = await userResponse.json();

      const loggedUser = {
        id: userInfo.id,
        name: userInfo.name,
        email: userInfo.email,
        avatar: userInfo.picture,
      };

      setUser(loggedUser);

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(loggedUser));
    } catch (err) {
      throw new Error(String(err));
    }
  }, []);

  const signInWithApple = useCallback(async () => {
    try {
      const credentials = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        ],
      });

      if (!credentials) return;

      const loggedUser = {
        id: credentials.user,
        name: credentials.fullName?.givenName,
        email: credentials.email,
      };

      setUser(loggedUser as User);

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(loggedUser));
    } catch (err) {
      throw new Error(String(err));
    }
  }, []);

  const signOut = useCallback(async () => {
    setUser(null);

    await AsyncStorage.removeItem(STORAGE_KEY);
  }, []);

  const value = useMemo<AuthContextData>(() => {
    return {
      user,
      signInWithGoogle,
      signInWithApple,
      signOut,
    };
  }, [signInWithGoogle, user, signInWithApple, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
