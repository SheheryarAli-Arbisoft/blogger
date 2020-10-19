import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Container } from './components/Container';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Navbar />
      <Container>This is container content</Container>
    </Fragment>
  );
}

export default App;
