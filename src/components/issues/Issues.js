import React, { useState } from 'react'
import { Paper, Typography, Grid } from '@material-ui/core'

export default function Issues(){
    return(
        <React.Fragment>
            <Grid container>
                <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', paddingTop:'2em', paddingBottom:'0em'}}>
                    <Typography variant='h3' style={{fontWeight:'bold', letterSpacing: '0.25em'}}>ISSUE ONE: EUREKA</Typography>
                </Grid>
            </Grid>

            <Grid container>   
                <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', paddingTop:'2em', paddingBottom:'0em'}}>
                <div style={{height: "120vh", width: '200vh'}}>
                    <iframe style={{width: "100%", height: "100%"}} src="http://flowpaper.com/flipbook/https://www.planetebook.com/free-ebooks/crime-and-punishment.pdf"  scrolling='no' allowFullScreen></iframe>
                </div>
                </Grid>
            </Grid>
        </React.Fragment>
      )

}   
