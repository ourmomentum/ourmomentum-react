import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import SusansPlayground from './components/susans-playground/SusansPlayground';
import Landing from './components/Landing';
import firebase from './components/home-screen/Firebase';



function App() {
  return (
    <BrowserRouter>

      <Route path = "/susans-playground" component = {SusansPlayground}>
      </Route>
      <Route exact path = "/" component = {Landing}>

      </Route>

    </BrowserRouter>
  );
}

export default App;
