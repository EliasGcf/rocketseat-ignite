import { useContext } from 'react';

import { AuthContext } from '@contexts/Auth/context';

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
