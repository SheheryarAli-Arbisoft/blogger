import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const CustomGridItem = styled(Grid)`
  text-align: ${({ rtl }) => (rtl ? 'right' : 'left')};
  padding: 8px 12px !important;

  & > a {
    text-decoration: none;
    color: inherit;
  }
`;
