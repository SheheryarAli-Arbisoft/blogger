import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toolbar } from '@material-ui/core';
import { CustomNavbar } from './styled';
import { propTypes, defaultProps } from './props';
import { Text } from '../Text';
import { Button } from '../Button';
import { logout } from '../../actions/auth';
import { loadingSelector, isAuthenticatedSelector } from '../../selectors/auth';

export const Navbar = ({ ...rest }) => {
  const dispatch = useDispatch();

  const authLinks = (
    <Button variant='outlined' onClick={() => dispatch(logout())}>
      Logout
    </Button>
  );

  const normalLinks = (
    <Fragment>
      <Link to='/register'>
        <Button>Register</Button>
      </Link>
      <Link to='/login'>
        <Button>Login</Button>
      </Link>
    </Fragment>
  );

  const loading = useSelector(loadingSelector);
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  return (
    <CustomNavbar {...rest}>
      <Toolbar>
        <Text variant='h6' flexGrow bold>
          <Link to='/dashboard'>Blogger</Link>
        </Text>
        {!loading && isAuthenticated ? authLinks : normalLinks}
      </Toolbar>
    </CustomNavbar>
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
