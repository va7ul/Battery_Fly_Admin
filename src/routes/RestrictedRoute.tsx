import React from 'react';
import { Navigate } from 'react-router-dom';
import { useTypedSelector } from '../redux/hooks';
import { selectIsLoggedIn } from '../redux/admin/adminSelectors';

type RestrictedRouteProps = {
  component: React.ComponentType;
  redirectTo?: string;
};

export const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const isLoggedIn = useTypedSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
