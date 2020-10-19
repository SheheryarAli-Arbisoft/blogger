import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const CustomGridItem = styled(Grid)`
  margin-bottom: 20px;
  float: ${({ rtl }) => (rtl ? 'right' : 'none')};

  a {
    text-decoration: none;
    color: inherit;
  }
`;
