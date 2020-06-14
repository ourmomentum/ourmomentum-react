import React, { useState, useEffect, useRef } from 'react'
import MomentumToolbar from '../../toolbar/MomentumToolbar'
import FullScreenBanner from './FullScreenBanner';
import FeaturesArticles from './FeaturesArticles';

export default function HomeScreen() {
    const [bannerHeight, setBannerHeight] = useState(0);
    const toolbarRef = useRef(null);

    useEffect(()=>{
        if (toolbarRef) {
            setBannerHeight(toolbarRef.current.clientHeight);
        }

    }, [])

    return (
        <React.Fragment>
            <div ref={toolbarRef}>
            <MomentumToolbar  />
            </div>
                <FullScreenBanner height={'calc(100vh - ' + bannerHeight + 'px)'} />
            <div>
                <FeaturesArticles/>
            </div>
        </React.Fragment>
    )
}
