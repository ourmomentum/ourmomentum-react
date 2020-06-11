import React, {useState} from 'react'
import HomeScreen from '../home-screen/Homescreen';
import LoadingScreen from '../loading-screen/LoadingScreen'

export default function Landing() {
    const [loading, setLoading] = useState(true);
    setTimeout(setLoading.bind(this, false), 3000);

    return (
        (loading) ? <LoadingScreen /> : <HomeScreen />    
    )
}
