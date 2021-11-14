import { FC } from 'react';

import { useRequireAuth } from '../../hooks/useRequireAuth';

const DashboardPage: FC = () => {
  useRequireAuth();

  return <div className="section">You are logged in.</div>;
};

export default DashboardPage;
