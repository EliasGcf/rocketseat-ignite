import jwtDecode from 'jwt-decode';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { destroyCookie, parseCookies } from 'nookies';
import { AuthTokenError } from '../services/errors/AuthTokenError';
import { validateUserPermissions } from './validateUserPermissions';

type JwtDecodeResult = {
  permissions: string[];
  roles: string[];
};

type WithSSRAuthOptions = {
  permissions?: string[];
  roles?: string[];
};

export function withSSRAuth<T>(fn: GetServerSideProps<T>, options?: WithSSRAuthOptions) {
  return async (
    ctx: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<T | {}>> => {
    const cookies = parseCookies(ctx);
    const token = cookies['nextAuth.token'];

    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    if (options) {
      const user = jwtDecode<JwtDecodeResult>(token);

      const userHasValidPermissions = validateUserPermissions({
        user,
        permissions: options?.permissions,
        roles: options?.roles,
      });

      if (!userHasValidPermissions) {
        return {
          redirect: {
            destination: '/dashboard',
            permanent: false,
          },
        };
      }
    }

    try {
      return await fn(ctx);
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, 'nextAuth.token');
        destroyCookie(ctx, 'nextAuth.refreshToken');

        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        };
      }

      return {
        props: {},
      };
    }
  };
}
