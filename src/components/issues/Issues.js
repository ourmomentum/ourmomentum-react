import React from 'react'
import {Typography, Grid } from '@material-ui/core'
import {Divider, Flex, Heading, Stack} from "@chakra-ui/react";

export default function Issues(){
    return(
        <React.Fragment>
            <Stack direction={'column'} align={'center'} p={16} spacing={8}>
                <Stack direction={'column'}>
                    <Heading size={'3xl'} textAlign={'center'} fontWeight={'bold'} letterSpacing={'0.25em'}>ISSUE ONE</Heading>
                    <Divider />
                </Stack>
                    <Heading size={'3xl'} textAlign={'center'} fontWeight={'bold'} letterSpacing={'0.25em'}>EUREKA</Heading>
            </Stack>

            <Grid container>   
                <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', paddingTop:'2em', paddingBottom:'0em'}}>
                <div style={{height: "120vh", width: '200vh'}}>
                    <iframe title="Eureka" style={{width: "100%", height: "100%"}} src="http://flowpaper.com/flipbook/https://www.planetebook.com/free-ebooks/crime-and-punishment.pdf"  scrolling='no' allowFullScreen></iframe>
                </div>
                </Grid>
            </Grid>
        </React.Fragment>
      )

}   
