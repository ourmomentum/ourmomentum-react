import React from 'react'
import './Homescreen.css'
import {
  Container,
  AppBar,
  Toolbar,
  Button,
  Grid
} from '@material-ui/core'

export default function HomeScreen() {
    return (
      <>
      <AppBar position="static" color="transperant" class="navbar">
        <Toolbar>
        <img src="logosvg.svg" height="75px" />
        <div class="navbar_links">
          <Button color="inherit">Home</Button>
          <Button color="inherit">Issues</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">Our Team</Button>
          <Button color="inherit">Contact Us</Button>
        </div>
        </Toolbar>
        </AppBar>

        <center>
          <img src="homepage_banner.png" class="banner"/>
        </center>

        {/* style tests for "euerka" heading
        <Container>
          <center>
            <div class="edition0">
              EUREKA
            </div>
            <div class="edition">
              EUREKA
            </div>

            <div class="edition2">
              EUREKA
            </div>
            <div class="edition3">
              EUREKA
            </div>
          </center>
        </Container>
          */}
        </>

    )
}
