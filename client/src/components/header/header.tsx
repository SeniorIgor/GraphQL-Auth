import { FC, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useFetchUser, FetchUser } from '../../queries';
import { useLogout } from '../../mutations';

const Header: FC = () => {
  const { data, loading } = useFetchUser();

  const [logout] = useLogout();

  const handleLogout = useCallback(() => {
    logout({ refetchQueries: [{ query: FetchUser }] });
  }, [logout]);

  const renderedButtons = useMemo(() => {
    if (loading) {
      return null;
    }

    if (data && data.user) {
      return (
        <li>
          <a onClick={handleLogout}>Logout</a>
        </li>
      );
    }

    return (
      <>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </>
    );
  }, [data, loading, handleLogout]);

  return (
    <nav>
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{renderedButtons}</ul>
      </div>
    </nav>
  );
};

export default Header;
