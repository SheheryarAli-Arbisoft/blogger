import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { Navbar } from './components/Navbar';
import { Content } from './views/Content';
import { store } from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <Navbar />
        <Content />
      </Router>
    </Provider>
  );
}

export default App;
