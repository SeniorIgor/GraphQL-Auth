import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthForm, { HandleSubmit } from '../../components/auth-form';
import { useLogin } from '../../mutations/login';
import { FetchUser, useFetchUser } from '../../queries/fetchUser';

const LoginPage: FC = () => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { data } = useFetchUser();

  const [login] = useLogin();

  useEffect(() => {
    if (data?.user) {
      navigate('/dashboard');
    }
  }, [data, navigate]);

  const handleSubmit: HandleSubmit = ({ email, password }) => {
    login({
      variables: { email, password },
      refetchQueries: [{ query: FetchUser }],
    }).catch((res) => {
      const errors = res.graphQLErrors.map((error: Error) => error.message);
      setErrors(errors);
    });
  };

  return (
    <>
      <h3>Login</h3>
      <AuthForm errors={errors} handleSubmit={handleSubmit} />
    </>
  );
};

export default LoginPage;
