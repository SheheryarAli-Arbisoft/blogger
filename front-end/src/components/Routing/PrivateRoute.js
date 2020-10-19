import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loadingSelector, isAuthenticatedSelector } from '../../selectors/auth';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const loading = useSelector(loadingSelector);
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  return (
    <Route
      {...rest}
      render={props =>
        !loading && !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};
