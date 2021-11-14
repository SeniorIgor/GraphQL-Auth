import { gql, useMutation } from '@apollo/client';

import { User } from '../types/user';

interface LogoutResponse {
  user: User;
}

export const Logout = gql`
  mutation Logout {
    logout {
      id
      email
    }
  }
`;

export function useLogout() {
  return useMutation<LogoutResponse>(Logout);
}
