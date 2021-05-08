import Router, { useRouter } from 'next/router';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { api } from '../services/apiClient';

const THIRTY_DAYS_IN_SECONDS = 60 * 60 * 24 * 30;

type User = {
  email: string;
  permissions: string[];
  roles: string[];
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  user?: User;
  isAuthenticated: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

let authChannel: BroadcastChannel;

const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  destroyCookie(undefined, 'nextAuth.token');
  destroyCookie(undefined, 'nextAuth.refreshToken');

  authChannel.postMessage('signOut');

  Router.push('/');
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const router = useRouter();

  const [user, setUser] = useState<User>();

  const isAuthenticated = useMemo(() => !!user, [user]);

  useEffect(() => {
    authChannel = new BroadcastChannel('auth');

    authChannel.onmessage = message => {
      switch (message.data) {
        case 'signOut':
          signOut();
          break;
        default:
          break;
      }
    };
  }, []);

  useEffect(() => {
    const { 'nextAuth.token': token } = parseCookies();

    if (!token) return;

    api
      .get('/me')
      .then(response => {
        const { email, permissions, roles } = response.data;

        setUser({
          email,
          permissions,
          roles,
        });
      })
      .catch(() => signOut());
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post('sessions', {
        email,
        password,
      });

      const { token, refreshToken, permissions, roles } = response.data;

      setCookie(undefined, 'nextAuth.token', token, {
        maxAge: THIRTY_DAYS_IN_SECONDS, // 30 days
        path: '/',
      });
      setCookie(undefined, 'nextAuth.refreshToken', refreshToken, {
        maxAge: THIRTY_DAYS_IN_SECONDS, // 30 days
        path: '/',
      });

      setUser({
        email,
        permissions,
        roles,
      });

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      router.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  }, []);

  const value = useMemo(() => {
    return {
      user,
      signIn,
      signOut,
      isAuthenticated,
    };
  }, [isAuthenticated, signIn, signOut, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
