
import React from 'react'
import './MomentumToolbar.css'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DesktopToolbar from './DesktopToolbar';
import MobileToolbar from './MobileToolbar';
import { useTheme } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';

export default function MomentumToolbar() {
    const theme = useTheme();
    const onMobile = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(onMobile);
    return (
        <React.Fragment>
            {(!onMobile) ? <DesktopToolbar /> : <MobileToolbar />}
            <Toolbar />
        </React.Fragment>
    )
}

