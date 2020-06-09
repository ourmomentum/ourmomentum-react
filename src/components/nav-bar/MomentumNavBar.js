import React, {Component} from 'react'
import './navbar.css'
import {
  AppBar,
  ToolBar,
  Grid,
  Button
} from '@material-ui/core'

class MomentumNavBar extends React.Component{
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
            </div>
            </Toolbar>
          </AppBar>
      </React.Fragment>
  )
}

export default MomentumNavBar
