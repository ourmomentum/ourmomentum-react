import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/home-screen/Landing';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles'
import { MOMENTUM_LIGHT_GREEN, MOMENTUM_SIGNATURE_GREEN, MOMENTUM_RED } from './colors';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { createStore } from 'redux';

import MomentumToolbar from './components/toolbar/MomentumToolbar';
const store = createStore();


function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: MOMENTUM_LIGHT_GREEN,
        main: MOMENTUM_SIGNATURE_GREEN,
        contrastText: '#FFFFFF'
      }, secondary: {
        main: MOMENTUM_RED
      }
    }
});

  return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Route path = '/' component={MomentumToolbar} />
          <Route exact path = '/' component={Landing} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
 