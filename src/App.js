import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/home-screen/Landing';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles'
import { MOMENTUM_LIGHT_GREEN, MOMENTUM_SIGNATURE_GREEN, MOMENTUM_RED } from './constants/colors';
import Login from './components/login/Login';
import Policies from './components/policies/Policies';
import Register from './components/register/Register';
import Contact from './components/contact/Contact';
import Issues from './components/issues/Issues'
import Footer from './components/footer/MomentumFooter'
import MomentumToolbar from './components/toolbar/MomentumToolbar';
import UserContext from './utilities/UserContext';
import MeetTheMomentum from './components/meet-the-momentum/MeetTheMomentum'
import { makeAuthorizedRequest } from './utilities/MomentumRequests';
import User from './components/user/User';
import Team from './components/team/Team'




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
          <Route path='/team' component={Team} />
          <Route path='/register' component={Register} />
          <Route path='/contact' component={Contact} />
          <Route path='/read-momentum' component={Issues} />
          <Route path='/policies' component={Policies} />
          {/*<Route path='/meet-the-momentum' component={MeetTheMomentum} />*/}
          <Route path='/user' component={User} />
          <Route path = '/' component={Footer} />
          </ThemeProvider>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
