import React, { useState, useEffect, useRef } from 'react'
import MomentumToolbar from '../toolbar/MomentumToolbar'
import FullScreenBanner from './FullScreenBanner';
import FeaturedArticles from './FeaturedArticles';
import MomentumFooter from '../footer/MomentumFooter';
import { Toolbar } from '@material-ui/core';
import EditorsNote from './EditorsNote';

export default function HomeScreen(props) {
    const [bannerHeight, setBannerHeight] = useState(0);
    const toolbarRef = useRef(null);

    useEffect(()=>{
        if (toolbarRef) {
            setBannerHeight(toolbarRef.current.clientHeight);
        }

    }, [])

    return (
        <div style={{background: '#ffffff'}}>
            <div ref={toolbarRef}>

            </div>
                <FullScreenBanner height={'calc(100vh - ' + bannerHeight + 'px)'}/>
                    <FeaturedArticles/>
                <EditorsNote />
        </div>
    )
}
