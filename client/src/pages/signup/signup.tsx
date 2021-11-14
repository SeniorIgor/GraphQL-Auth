import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthForm, { HandleSubmit } from '../../components/auth-form';
import { useSignup } from '../../mutations';
import { FetchUser, useFetchUser } from '../../queries/fetchUser';

const SignupPage: FC = () => {
  const [errors, setErrors] = useState([]);
  const { data } = useFetchUser();
  const navigate = useNavigate();

  const [signup] = useSignup();

  useEffect(() => {
    if (data?.user) {
      navigate('/dashboard');
    }
  }, [data, navigate]);

  const handleSubmit: HandleSubmit = ({ email, password }) => {
    signup({
      variables: { email, password },
      refetchQueries: [{ query: FetchUser }],
    }).catch((res) => {
      const errors = res.graphQLErrors.map((error: Error) => error.message);
      setErrors(errors);
    });
  };

  return (
    <>
      <h3>Sign Up</h3>
      <AuthForm errors={errors} handleSubmit={handleSubmit} />
    </>
  );
};

export default SignupPage;
