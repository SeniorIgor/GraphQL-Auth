import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import App from './components/app';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import DashboardPage from './pages/dashboard';

const Router: FC = () => {
  return (
    <>
      <App>
        <Routes>
          <Route path="/" element={<div>App</div>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />

          <Route
            element={
              <div className="container center">
                <h1 className="title">404</h1>
                <p className="text-darken-1">Not found</p>
              </div>
            }
          />
        </Routes>
      </App>
    </>
  );
};

export default Router;
