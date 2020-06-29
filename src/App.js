import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/home-screen/Landing';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles'
import { MOMENTUM_LIGHT_GREEN, MOMENTUM_SIGNATURE_GREEN, MOMENTUM_RED } from './colors';
import Login from './components/login/Login';
import Policies from './components/policies/Policies';
import Register from './components/register/Register';
import Contact from './components/contact/Contact';
import Issues from './components/issues/Issues'
import Footer from './components/footer/MomentumFooter'

import MomentumToolbar from './components/toolbar/MomentumToolbar';

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
          <Route path='/contact' component={Contact} />
          <Route path='/read-momentum' component={Issues} />
          <Route path='/policies' component={Policies} />
          <Route path = '/' component={Footer} />
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
