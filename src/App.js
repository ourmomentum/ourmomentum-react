import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import SusansPlayground from './components/susans-playground/SusansPlayground';
import Landing from './components/Landing';

import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/home-screen/Landing';

function App() {

  return (
    <BrowserRouter>

      <Route path = "/susans-playground" component = {SusansPlayground}>

      </Route>
      <Route exact path = "/" component = {Landing}>

      </Route>
      <Route exact path = '/' component={Landing} />
    </BrowserRouter>
  );
}

export default App;
