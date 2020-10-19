import React from 'react';
import { CustomNavbar } from './styled';
import { propTypes, defaultProps } from './props';
import { Toolbar } from '@material-ui/core';

export const Navbar = () => {
  return (
    <CustomNavbar>
      <Toolbar>Blogger</Toolbar>
    </CustomNavbar>
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
