import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/home-screen/Landing';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles'
import { MOMENTUM_LIGHT_GREEN, MOMENTUM_SIGNATURE_GREEN, MOMENTUM_RED } from './colors';

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
          <Route exact path = '/' component={Landing} />
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
