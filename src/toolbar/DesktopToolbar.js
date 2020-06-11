import React from 'react'
import { AppBar, Toolbar,  Typography, Grid } from '@material-ui/core'
import { Link } from "react-router-dom"
export default function DesktopToolbar() {
    return (
        <AppBar style={{background: "#FFFFFF"}} title={<img src="logo.svg" alt="Momentum Magazine"/>}>
            <Toolbar style={{color: "black"}}>
                <Grid container>
                    <Grid item sm={2}>
                        <img style={{height: "56px"}} src="logo.svg" alt="Momentum Magazine" />
                    </Grid>
                    <Grid sm />
                    <Grid item sm={10} md={6} lg={5} xl={3} style={{display: "flex", justifyContent: "space-between"}}>
                            <Link to="/blog"><Typography variant="button">Blog</Typography></Link>      
                                
                            <Link to="/blog"><Typography variant="button">Read Momentum</Typography></Link>      
                                
                            <Link to="/blog"><Typography variant="button">Our Story</Typography></Link>     
                                
                            <Link to="/blog"><Typography variant="button">Log In</Typography></Link>        
                    </Grid>
                    <Grid item md={1} />
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
