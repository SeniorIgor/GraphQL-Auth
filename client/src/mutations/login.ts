import { gql, useMutation } from '@apollo/client';

import { User } from '../types/user';

interface LoginResponse {
  user: User;
}

interface LoginVariables {
  email: string;
  password: string;
}

export const Login = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;

export function useLogin() {
  return useMutation<LoginResponse, LoginVariables>(Login);
}
