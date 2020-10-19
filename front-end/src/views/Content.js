import React from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import { Container } from '../components/Container';
import { Alert } from '../components/Alert';
import { PrivateRoute } from '../components/Routing';
import { Login } from './Login';
import { Register } from './Register';
import { Dashboard } from './Dashboard';
import { CreateBlog } from './CreateBlog';
import { EditBlog } from './EditBlog';

export const Content = () => {
  const { pathname } = useLocation();

  return (
    <Container authRoute={pathname === '/login' || pathname === '/register'}>
      <Alert />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-blog' component={CreateBlog} />
        <PrivateRoute exact path='/edit-blog/:id' component={EditBlog} />
      </Switch>
    </Container>
  );
};
