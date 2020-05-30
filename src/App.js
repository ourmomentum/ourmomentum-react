import React, {useState} from 'react';
import './App.css';
import LoadingScreen from './components/loading-screen/LoadingScreen';
import HomeScreen from './components/home-screen/Homescreen';

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(setLoading.bind(this, false), 3000);

  return (
    <div>
      {(loading) ? <LoadingScreen /> : <HomeScreen />}
    </div>
  );
}

export default App;
