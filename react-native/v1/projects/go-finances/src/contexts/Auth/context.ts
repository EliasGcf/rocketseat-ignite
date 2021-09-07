import { createContext } from 'react';

export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

export type AuthContextData = {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextData);
