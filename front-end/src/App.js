import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { Navbar } from './components/Navbar';
import { Content } from './views/Content';
import './App.css';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Content />
    </Router>
  );
}

export default App;
