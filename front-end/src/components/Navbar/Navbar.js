import React from 'react';
import { Link } from 'react-router-dom';
import { CustomNavbar } from './styled';
import { propTypes, defaultProps } from './props';
import { Toolbar } from '@material-ui/core';
import { Text } from '../Text';
import { Button } from '../Button';

export const Navbar = ({ ...rest }) => {
  return (
    <CustomNavbar {...rest}>
      <Toolbar>
        <Text variant='h6' flexGrow>
          <Link to='/'>Blogger</Link>
        </Text>
        <Link to='/register'>
          <Button>Register</Button>
        </Link>
        <Link to='/login'>
          <Button>Login</Button>
        </Link>
      </Toolbar>
    </CustomNavbar>
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
