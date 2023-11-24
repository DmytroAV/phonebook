import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRegister = !isLoggedIn && !isRefreshing;
  return shouldRegister ? <Navigate to={redirectTo} /> : Component;
};
