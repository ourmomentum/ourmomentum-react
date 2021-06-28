import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import { Stack, Text } from '@chakra-ui/react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PoppingUp from '../pop-up/PoppingUp';


export default function MomentumFooter() {
    return (
        <Stack py={30} mt={32} bgColor={'#ededed'} direction={['column', 'column', 'row']} w={'100%'} justify={'space-evenly'} spacing={8} px={8}>
            <Stack direction={'row'} justify={'center'}>
                {/*<Button variant='outlined' style={{marginRight:'1em', color:'#9c9c9c'}} target="_blank" href="#">Follow Us</Button>*/}
                <Link to="/policies"><Button variant='outlined' style={{marginRight:'1em', color:'#9c9c9c'}}>Our Policies</Button></Link>
                <Button variant='outlined' style={{marginRight:'1em', backgroundColor:'#51AF9D', color:'white', borderColor:'#51AF9D'}} target="_blank" href="https://www.patreon.com/join/themomentummagazine">Patreon</Button>
            </Stack>
            <Stack direction={'row'} justify={'center'} align={'center'}>
                <Text style={{fontSize:'1.05em', color:'#9c9c9c'}}>© 2021 Momentum Magazine</Text>
                <a target="_blank" href="https://www.instagram.com/momentumagazine"><InstagramIcon style={{marginLeft:'0.6em', color:'#9c9c9c'}}/></a>
                <a target="_blank" href="https://www.twitter.com/ourmomentumag"><TwitterIcon style={{marginLeft:'0.3em', color:'#9c9c9c'}}/></a>
                <a target="_blank" href="https://www.linkedin.com/company/momentummagazine/"><LinkedInIcon style={{marginLeft:'0.3em', color:'#9c9c9c'}}/></a>
                <Link to="/post-article"><PermIdentityIcon style={{marginLeft:'0.3em', color:'#9c9c9c'}}/></Link>
            </Stack>

        </Stack>

    )
}
