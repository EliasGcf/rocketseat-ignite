import { useEffect } from 'react';

import { useAuth } from '../contexts/AuthContext';
import { withSSRAuth } from '../utils/withSSRAuth';

import { api } from '../services/apiClient';
import { Can } from '../components/Can';

export default function Dashboard() {
  const { user, signOut } = useAuth();

  useEffect(() => {
    api
      .get('/me')
      .then(response => console.log('Dashboard', response))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>

      <button type="button" onClick={signOut}>
        Sign Out
      </button>

      <Can permissions={['metrics.list']}>
        <div>Métricas</div>
      </Can>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {},
  };
});
