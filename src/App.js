import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/home-screen/Landing';
import Issues from './components/pages/Issues'
import Blog from './components/pages/Blog'
import Team from './components/pages/Team'
import Contact from './components/pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Route exact path = '/' component={Landing} />
      <Route path="/issues" component={Issues} />
      <Route path="/blog" component={Blog} />
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />
    </BrowserRouter>
  );
}

export default App;
