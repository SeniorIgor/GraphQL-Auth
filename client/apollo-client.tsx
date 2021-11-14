import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const link = createHttpLink({
  uri: '/graphql',
  credentials: 'same-origin',
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
