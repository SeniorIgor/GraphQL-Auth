import { gql, useMutation } from '@apollo/client';

import { User } from '../types/user';

interface SignupResponse {
  user: User;
}

interface SignupVariables {
  email: string;
  password: string;
}

export const Signup = gql`
  mutation Signup($email: String, $password: String) {
    signup(email: $email, password: $password) {
      id
      email
    }
  }
`;

export function useSignup() {
  return useMutation<SignupResponse, SignupVariables>(Signup);
}
