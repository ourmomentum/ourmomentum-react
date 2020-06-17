import React, {useState, useEffect} from 'react'
import HomeScreen from '../home-screen/Homescreen';
import LoadingScreen from '../loading-screen/LoadingScreen'

export default function Landing() {
    const [loading, setLoading] = useState(false);

    return (
        (loading) ? <LoadingScreen /> : <HomeScreen />    
    )
}
