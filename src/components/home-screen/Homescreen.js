import React from 'react'
import './Homescreen.css'
import {
  AppBar,
  Toolbar,
  Button,
  Grid
} from '@material-ui/core'
import SusansPlayground from '../susans-playground/SusansPlayground';


function scuzan() {
    return (
      <div>
        {<SusansPlayground />}
      </div>
    );
  }

export default function HomeScreen() {
    return (
        <React.Fragment>
            <AppBar position="static" color="transperant">
                <Toolbar>
                <img src="logosvg.svg" height="75px" />
                <div className="navbar_links">
                <Button color="inherit">Home</Button>
                <Button color="inherit">Issues</Button>
                <Button color="inherit">Blog</Button>
                <Button color="inherit">Our Team</Button>
                <Button color="inherit">Contact Us</Button>
                <Button color="inherit"  onClick={() => scuzan()}>Susan's Playground</Button>
                <form>
                    <input type="Button" onclick="scuzan()" value="Click" />
                </form>
                </div>
                </Toolbar>
                </AppBar>

                <Grid container style={{marginTop: "1em"}}>
                    <Grid xs />
                    <Grid item xs={8} className="centeredContainer">
                        <img src="homepage_banner.png" className="banner"/>
                    </Grid>
                    <Grid xs />
                </Grid>

                <Grid container>
                    <Grid item xs={12} className="edition0 centeredContainer">
                    EUREKA
                    </Grid>
                    <Grid item xs={12} className="edition centeredContainer">
                    EUREKA
                    </Grid>

                    <Grid item xs={12} className="edition2 centeredContainer">
                    EUREKA
                    </Grid>
                    <Grid item xs={12} className="edition3 centeredContainer">
                    EUREKA
                    </Grid>
                </Grid>
        </React.Fragment>

    )
}


