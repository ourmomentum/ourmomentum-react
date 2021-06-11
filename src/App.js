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
import { makeAuthorizedRequest } from './utilities/MomentumRequestsOld';
import User from './components/user/User';
import Brightside from './components/blog/blog-pages.old/Brightside';
import BlogPage from './components/blog/blog-page/BlogPage';
import BlogPostContainer from './components/blog/blog-page/BlogPostContainer';
import PostArticle from './components/post-article/PostArticle';
import Blog from "./components/blog/Blog";
import { ChakraProvider } from "@chakra-ui/react"



function App() {
  const [userInfo, setUserInfo] = useState({});
/*
  useEffect(() => {
    makeAuthorizedRequest('/authorized/check')
    .then((res) => {
      if (res && res.data) {
        console.log(res)
        setUserInfo({loggedIn: true, user: res.data})
      }
    })
  }, [])
*/
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
      <ChakraProvider>
            <UserContext.Provider value={[userInfo, setUserInfo]}>
              <BrowserRouter>
                  <ThemeProvider theme={theme}>
                  <Route path = '/' component={MomentumToolbar} />
                  <Route exact path = '/' component={Landing} />
                  <Route path='/login' component={Login} />
                  <Route path='/register' component={Register} />
                  <Route path='/contact' component={Contact} />
                  <Route path='/read-momentum' component={Issues} />
                  <Route path='/policies' component={Policies} />
                  <Route path='/meet-the-momentum' component={MeetTheMomentum} />
                  <Route path='/user' component={User} />
                  <Route path='/blog' component={Blog} />
                  <Route path='/post/:id' component={BlogPostContainer} />
                  <Route path='/post-article' component={PostArticle}/>
                  <Route path = '/' component={Footer} />
                  </ThemeProvider>
              </BrowserRouter>
            </UserContext.Provider>
      </ChakraProvider>
  );
}
 
export default App;
