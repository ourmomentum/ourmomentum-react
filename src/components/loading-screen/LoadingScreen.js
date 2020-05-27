import React from 'react'
import {Grid} from '@material-ui/core';
import "./LoadingScreen.css";


export default function LoadingScreen() {
    return (
        <div style = {{height: "100%", width: "100%", display: "flex", alignItems: "center"}}>
            <Grid container>
                <Grid item xs/>
                <Grid item xs = {5}>
                <img src = "/logosvg.svg" style = {{height: "auto"}}/>   
                
                </Grid>
                <Grid item xs/>
            </Grid>
        </div>
    )
}
