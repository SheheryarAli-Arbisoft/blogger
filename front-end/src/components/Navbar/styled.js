import styled from 'styled-components';
import { AppBar } from '@material-ui/core';

export const CustomNavbar = styled(AppBar)`
  a {
    text-decoration: none;
    color: inherit;
  }

  border-top: 5px solid ${({ theme }) => theme.palette.primary.main};
`;
