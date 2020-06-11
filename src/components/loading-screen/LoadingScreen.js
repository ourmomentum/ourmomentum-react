import React from 'react'
import {Grid} from '@material-ui/core'
import './LoadingScreen.css'


export default function LoadingScreen() {

  
    return (
            <Grid container style = {{height: "100vh", width: "100vw", display: "flex", alignItems: "center"}}>
                <Grid item xs/>
                <Grid id="loadingImageContainer" item xs = {5} md={1}>
                <img alt="Loading..." src = "logo.svg" style = {{height: "auto"}}/>   
                
                </Grid>
                <Grid item xs/>
            </Grid>
    )
}
