import React, {useState} from 'react'
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import MenuBooksIcon from '@material-ui/icons/MenuBook'
import PeopleIcon from '@material-ui/icons/People'
import LoginIcon from '@material-ui/icons/VpnKey'
import { Link } from 'react-router-dom'
export default function MobileToolbar() {
    
    const [drawerOpen, setDrawerOpen] = useState(false);
    // TODO: Make into JSON file to be used across desktop and mobile toolbar.
    return (
        <React.Fragment>
            <AppBar style={{background: "#FFFFFF"}} title={<img src="logo.svg" alt="Momentum Magazine"/>}>
                <Toolbar style={{color: "black"}}>
                            <IconButton edge="start" onClick={()=>{setDrawerOpen(true)}}>
                                <MenuIcon />
                            </IconButton>
                            <img src="logo_with_text.png" height={'56px'} style={{margin: 'auto'}} alt="Mom"/>
                </Toolbar>
            </AppBar>
            <Drawer anchor='left' open={drawerOpen} onClose={()=>setDrawerOpen(false)}>
            <List>
                <Link to='/'>
                    <ListItem>
                        <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
                        <ListItemText>Blog</ListItemText>
                    </ListItem>
                </Link>
                <Link to='/read-momentum'>
                    <ListItem>
                        <ListItemIcon><MenuBooksIcon /></ListItemIcon>
                        <ListItemText>Read Momentum</ListItemText>
                    </ListItem>
                </Link>
                <Link to='/our-story'>
                    <ListItem>
                        <ListItemIcon><PeopleIcon /></ListItemIcon>
                        <ListItemText>Our Story</ListItemText>
                    </ListItem>
                </Link>
                <Link to='/login'>
                    <ListItem>
                        <ListItemIcon><LoginIcon /></ListItemIcon>
                        <ListItemText>Log In</ListItemText>
                    </ListItem>
                </Link>
            </List>
            </Drawer>
        </React.Fragment>
    )
}
