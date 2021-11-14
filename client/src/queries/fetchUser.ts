import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import { User } from '../types/user';

interface FetchUserResponse {
  user: User;
}

export const FetchUser = gql`
  query FetchUser {
    user {
      id
      email
    }
  }
`;

export function useFetchUser() {
  return useQuery<FetchUserResponse>(FetchUser);
}
