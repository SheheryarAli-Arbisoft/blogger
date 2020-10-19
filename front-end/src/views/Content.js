import React from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import { Container } from '../components/Container';
import { Login } from './Login';
import { Register } from './Register';

export const Content = () => {
  const { pathname } = useLocation();

  return (
    <Container authRoute={pathname === '/login' || pathname === '/register'}>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </Container>
  );
};
