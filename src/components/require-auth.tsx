import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { AuthConsumer } from '../hooks/auth';

export const RequireAuth = () => {
  const { authed } = AuthConsumer();
  const location = useLocation();

  return authed.auth === true ? (
    <Outlet />
  ) : (
    <Navigate to='/login' replace state={{ path: location.pathname }} />
  );
};
