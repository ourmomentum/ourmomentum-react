import React, { useRef } from 'react'
import ViewMore from '@material-ui/icons/ExpandMore'
import { Icon } from '@material-ui/core'

export default function FullScreenBanner(props) {

    const bannerRef = useRef(null);

    const scrollDown = () => {
        if (bannerRef) {
            window.scrollBy({
                top: bannerRef.current.clientHeight - window.scrollY,
                behavior: 'smooth'
            });
        }
    }


    return (
        <div style={{height: props.height,
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'flex-end',
                     width: '100%',
                     backgroundImage: 'url(\'eureka_banner.svg\')',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'none',
                     backgroundSize: 'cover'}}

                     ref={bannerRef}>
                     
            <Icon style={{height: '4em', width: '4em', cursor: 'pointer'}} onClick={scrollDown}><ViewMore style={{height: '100%', width: '100%'}}/></Icon>
        </div>
    )
}
