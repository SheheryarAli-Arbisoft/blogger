import styled from 'styled-components';
import { Container } from '@material-ui/core';

export const CustomContainer = styled(Container)`
  height: 100%;
  display: ${({ authRoute }) => (authRoute ? 'flex' : 'block')};
  justify-content: ${({ authRoute }) => (authRoute ? 'center' : 'none')};
  align-items: ${({ authRoute }) => (authRoute ? 'center' : 'none')};
  padding-top: ${({ authRoute }) => (authRoute ? '0' : '100px')};
  padding-bottom: ${({ authRoute }) => (authRoute ? '0' : '100px')};
`;
