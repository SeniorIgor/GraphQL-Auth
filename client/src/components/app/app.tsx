import { FC } from 'react';

import Header from '../header';

const App: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
};

export default App;
