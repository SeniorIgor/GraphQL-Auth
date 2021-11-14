import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { HashRouter } from 'react-router-dom';

import { apolloClient } from '../apollo-client';
import Router from './router';
import './style/style.sass';

const Root = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <HashRouter>
        <Router />
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
