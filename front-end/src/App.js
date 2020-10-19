import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { Navbar } from './components/Navbar';
import { Content } from './views/Content';
import { store } from './store';
import { theme } from './theme';
import { loadUser } from './actions/auth';
import './App.css';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Navbar />
              <Content />
            </ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </Router>
    </Provider>
  );
};

export default App;
