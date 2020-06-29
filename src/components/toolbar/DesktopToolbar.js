import React, { useState, useEffect, useContext } from 'react'
import { AppBar, Toolbar,  Typography, Grid, Menu, MenuItem } from '@material-ui/core'
import { Link } from "react-router-dom"
import UserContext from '../../utilities/UserContext';
import { makeAuthorizedRequest, deleteCreds } from '../../utilities/MomentumRequests';
export default function DesktopToolbar() {
    const [userMenu, setUserMenu] = useState();
    const [userInfo, setUserInfo] = useContext(UserContext);

    useEffect(() => {
        
    }, [])

    

    const handleClick = (event) => {
        setUserMenu(event.currentTarget);
      };

    const handleClose = () => {
        setUserMenu(null);
    }

    const logOut = () => {
        sessionStorage.clear();
        setUserInfo({});
        deleteCreds();
        makeAuthorizedRequest('/logout')
        .then(() => {
            window.location.reload();
        }).catch();
    }
    
    return (
        <React.Fragment>
            <AppBar style={{background: "#FFFFFF"}} title={<img src="logo.svg" alt="Momentum Magazine"/>} id='toolbar'>
                <Toolbar style={{color: "black"}}>
                    <Grid container>
                        <Grid item sm={2}>
                            <img style={{height: "56px"}} src="logo.svg" alt="Momentum Magazine" />
                        </Grid>
                        <Grid item sm />
                        <Grid item sm={10} md={6} lg={5} xl={4} style={{display: "flex", justifyContent: "space-between"}}>
                                <Link to="/"><Typography variant="button">Blog</Typography></Link>      
                                    
                                <Link to="/read-momentum"><Typography variant="button">Read Momentum</Typography></Link>      
                                    
                                <Link to="/our-story"><Typography variant="button">Our Story</Typography></Link>     
                                {
                                    (userInfo.loggedIn && userInfo.user) ?
                                    <React.Fragment>
                                        <Link><Typography variant='button' onClick={handleClick}> Hi, {userInfo.user.username}</Typography></Link>    
                                        <Menu anchorEl={userMenu} open={Boolean(userMenu)} onClose={handleClose}>
                                            <MenuItem>
                                                <Link><Typography variant='button'>My Submissions</Typography></Link>
                                            </MenuItem>
                                            <MenuItem>
                                                <Link><Typography variant='button'>User Details</Typography></Link>
                                            </MenuItem>
                                            <MenuItem onClick={logOut}>
                                                <Link><Typography variant='button'>Log Out</Typography></Link>
                                            </MenuItem>
                                        </Menu>
                                    </React.Fragment>
                                :
                                ''
                                }
                        </Grid>
                        <Grid item md={1} />
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
