

import React, {useState} from 'react';
import LoadingScreen from "./loading-screen/LoadingScreen";
import HomeScreen from "./home-screen/Homescreen";
import { Paper } from '@material-ui/core';

export default function Landing() {
    const [loading, setLoading] = useState(true);
    setTimeout(setLoading.bind(this, false), 1500);
    return (
        <div>
            {(loading) ? <LoadingScreen/> : <HomeScreen />}
            
        </div>
    )
}

