import styled from 'styled-components';
import { Typography } from '@material-ui/core';

export const CustomText = styled(Typography)`
  flex-grow: ${({ flexGrow }) => (flexGrow ? '1' : 'none')};
`;
