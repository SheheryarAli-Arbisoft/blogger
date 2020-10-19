import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const CustomText = styled(Typography)`
  flex-grow: ${({ flexGrow }) => (flexGrow ? '1' : 'none')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'none')};
  font-family: inherit;

  i {
    margin-right: 10px;
  }
`;
