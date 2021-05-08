import { ReactNode } from 'react';
import { userCan } from '../hooks/userCan';

type CanProps = {
  children: ReactNode;
  permissions?: string[];
  roles?: string[];
};

export function Can({ children, permissions, roles }: CanProps) {
  const userCanSeeThisComponent = userCan({ permissions, roles });

  if (!userCanSeeThisComponent) return null;

  return <>{children}</>;
}
