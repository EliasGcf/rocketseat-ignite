import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import * as AuthSession from 'expo-auth-session';

import { AuthContext, AuthContextData, User } from '@contexts/Auth/context';

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

      setUser({
        id: userInfo.id,
        name: userInfo.name,
        email: userInfo.email,
        avatar: userInfo.picture,
      });
    } catch (err) {
      throw new Error(String(err));
    }
  }, []);

  const value = useMemo<AuthContextData>(() => {
    return {
      user,
      signInWithGoogle,
    };
  }, [signInWithGoogle, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
