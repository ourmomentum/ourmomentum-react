import React, {useState} from 'react';
import './App.css';
import LoadingScreen from './components/loading-screen/LoadingScreen';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/home-screen/Landing';
import MomentumToolbar from './toolbar/MomentumToolbar';

function App() {

  return (
    <BrowserRouter>
      <Route exact path = '/' component={Landing} />
    </BrowserRouter>
  );
}

export default App;
