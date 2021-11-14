import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFetchUser } from '../queries/fetchUser';

export const useRequireAuth = (): void => {
  const navigate = useNavigate();
  const { data, loading } = useFetchUser();

  useEffect(() => {
    if (!loading && !data?.user) {
      navigate('/login');
    }
  }, [data, loading, navigate]);
};
