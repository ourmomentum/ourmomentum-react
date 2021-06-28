import React, {useState} from 'react'
import {AppBar, Toolbar, IconButton, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, Heading, Stack, Divider, CloseButton, Flex,
} from "@chakra-ui/react"
import MenuIcon from '@material-ui/icons/Menu'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import MenuBooksIcon from '@material-ui/icons/MenuBook'
import PeopleIcon from '@material-ui/icons/People'
import LoginIcon from '@material-ui/icons/VpnKey'
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { Link } from 'react-router-dom'
import {Image} from "@chakra-ui/react";
export default function MobileToolbar() {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const closeDrawer = () => setDrawerOpen(false);
    // TODO: Make into JSON file to be used across desktop and mobile toolbar.
    return (
        <React.Fragment>
            <AppBar style={{background: "#FFFFFF"}} title={<img src="logo.svg" alt="Momentum Magazine"/>}>
                <Toolbar style={{color: "black"}}>
                            <IconButton edge="start" onClick={()=>{setDrawerOpen(true)}}>
                                <MenuIcon />
                            </IconButton>
                            <Link to={'/'}><Image src="logo_with_text.png" h={'56px'} style={{margin: 'auto'}} alt="Mom"/></Link>
                </Toolbar>
            </AppBar>
            <Drawer placement={'left'} isOpen={drawerOpen} onClose={()=>setDrawerOpen(false)}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        <Stack direction={'row'} align={'center'}>
                            <Heading>Navigation</Heading>
                            <Flex justify={'flex-end'} flexGrow={1}>
                                <CloseButton justifySelf={'flex-end'} onClick={closeDrawer} />
                            </Flex>
                        </Stack>
                    </DrawerHeader>
                        <DrawerBody>
                        <Stack direction={'column'} divider={<Divider />} spacing={4}>
                            <Link to='/' onClick={closeDrawer}>
                                <Stack direction={'row'}>
                                    <ListItemIcon><PeopleIcon /></ListItemIcon>
                                    <ListItemText>Home</ListItemText>
                                </Stack>
                            </Link>
                            <Link to='/blog' onClick={closeDrawer}>
                                <Stack direction={'row'}>
                                    <ListItemIcon><LibraryBooksIcon /></ListItemIcon>
                                    <ListItemText>Blog</ListItemText>
                                </Stack>
                            </Link>
                            <Link to='/read-momentum' onClick={closeDrawer}>
                                <Stack direction={'row'}>
                                    <ListItemIcon><MenuBooksIcon /></ListItemIcon>
                                    <ListItemText>Read Momentum</ListItemText>
                                </Stack>
                            </Link>
                            <Link to='/contact' onClick={closeDrawer}>
                                <Stack direction={'row'}>
                                    <ListItemIcon><ImportContactsIcon /></ListItemIcon>
                                    <ListItemText>Contact</ListItemText>
                                </Stack>
                            </Link>
                        </Stack>
                        </DrawerBody>
                </DrawerContent>

            </Drawer>
        </React.Fragment>
    )
}
