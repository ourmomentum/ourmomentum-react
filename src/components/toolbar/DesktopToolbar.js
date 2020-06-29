import React, { useState } from 'react'
import { AppBar, Toolbar,  Typography, Grid, Menu, MenuItem } from '@material-ui/core'
import { Link } from "react-router-dom"
export default function DesktopToolbar() {
    const [userMenu, setUserMenu] = useState();

    const handleClick = (event) => {
        setUserMenu(event.currentTarget);
      };

    const handleClose = () => {
        setUserMenu(null);
    }

    return (
        <React.Fragment>
            <AppBar style={{background: "#FFFFFF"}} title={<img src="logo.svg" alt="Momentum Magazine"/>} id='toolbar'>
                <Toolbar style={{color: "black"}}>
                    <Grid container>
                        <Grid item sm={2}>
                            <Link to="/"><img style={{height: "56px"}} src="logo.svg" alt="Momentum Magazine" /></Link>
                        </Grid>
                        <Grid item sm />
                        <Grid item sm={10} md={6} lg={5} xl={4} style={{display: "flex", justifyContent: "space-between"}}>
                                <Link to="/"><Typography variant="button">Blog</Typography></Link>

                                <Link to="/read-momentum"><Typography variant="button">Read Momentum</Typography></Link>

                                <Link to="/our-story"><Typography variant="button">Our Story</Typography></Link>

                                <Link to="/contact"><Typography variant="button">Contact</Typography></Link>     

                                <Link><Typography variant='button' onClick={handleClick}> Hi, TestUser</Typography></Link>
                                <Menu anchorEl={userMenu} open={Boolean(userMenu)} onClose={handleClose}>
                                    <MenuItem>
                                        <Link><Typography variant='button'>My Submissions</Typography></Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link><Typography variant='button'>User Details</Typography></Link>
                                    </MenuItem>
                                </Menu>
                        </Grid>
                        <Grid item md={1} />
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
