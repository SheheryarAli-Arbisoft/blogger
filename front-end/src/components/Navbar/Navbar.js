import React from 'react';
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
          Blogger
        </Text>
        <Button>Register</Button>
        <Button>Login</Button>
      </Toolbar>
    </CustomNavbar>
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
