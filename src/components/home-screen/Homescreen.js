import React from 'react'
import { AppBar, Toolbar,  Typography } from '@material-ui/core'

export default function HomeScreen() {
    return (
        <div>
            <AppBar style={{background: "#FFFFFF"}}>
                <Toolbar style={{color: "black"}}>
                    <Typography>
                        Stuff will hopefully go here
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
