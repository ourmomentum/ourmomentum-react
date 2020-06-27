import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/home-screen/Landing';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles'
import { MOMENTUM_LIGHT_GREEN, MOMENTUM_SIGNATURE_GREEN, MOMENTUM_RED } from './constants/colors';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Cookie from 'universal-cookie'
import MomentumToolbar from './components/toolbar/MomentumToolbar';
import UserContext from './utilities/UserContext';
import { useEffect } from 'react';
import { makeAuthorizedRequest } from './utilities/MomentumRequests';




function App() {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    makeAuthorizedRequest('/authorized/check')
    .then((res) => {
      if (res && res.data) {
        console.log(res)
        setUserInfo({loggedIn: true, user: res.data})
      }
    })
    return () => {
      
    }
  }, [])

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
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Route path = '/' component={MomentumToolbar} />
            <Route exact path = '/' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </ThemeProvider>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
 