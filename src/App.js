import React, {useState} from 'react';
import logo from './logo.svg';
import React from 'react';
import './App.css';
import LoadingScreen from './components/loading-screen/LoadingScreen';
import HomeScreen from './components/home-screen/Homescreen';
import { BrowserRouter, Route } from "react-router-dom";
import SusansPlayground from './components/susans-playground/SusansPlayground';
import Landing from './components/Landing';


function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(setLoading.bind(this, false), 1500);

  return (
    <div>
      {(loading) ? <LoadingScreen /> : <HomeScreen />}
    </div>
    <BrowserRouter>
      
      <Route path = "/susans-playground" component = {SusansPlayground}>
         
      </Route>
      <Route exact path = "/" component = {Landing}>

      </Route>
    </BrowserRouter>
  );
}

export default App;
