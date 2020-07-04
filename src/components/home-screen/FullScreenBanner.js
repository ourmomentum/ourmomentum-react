import React, { useRef } from 'react'
import ViewMore from '@material-ui/icons/ExpandMore'
import { Icon } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

export default function FullScreenBanner(props) {

    const theme = useTheme();

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
        <div style={{height: 'calc(100vh - ' + ((useMediaQuery(theme.breakpoints.up('sm'))) ? '64px' : '56px') + ')',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'flex-end',
                     width: '100%',
                     backgroundImage: 'url(\'banner_eureka.svg\')',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'none',
                     backgroundSize: 'cover'}}

                     ref={bannerRef}>
                     
            <Icon style={{height: '4em', width: '4em', cursor: 'pointer'}} onClick={scrollDown}><ViewMore style={{height: '100%', width: '100%'}}/></Icon>
        </div>
    )
}
