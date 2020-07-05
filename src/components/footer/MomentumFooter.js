import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PoppingUp from '../pop-up/PoppingUp';


export default function MomentumFooter() {
    return (
        <Grid container style={{paddingTop: '2em', paddingBottom: '2em', backgroundColor: '#ededed', /*borderTopLeftRadius: '0.5em', borderTopRightRadius: '0.5em',*/ marginTop: '15em'}}>
            <Grid container>
                <Grid item xs />
                <Grid item xs={4}>
                    <Typography style={{fontSize:'1.05em', color:'#9c9c9c'}}>© 2020 Momentum Magazine</Typography>
                    <a target="_blank" href="https://www.instagram.com/momentumagazine"><InstagramIcon style={{marginLeft:'0.6em', color:'#9c9c9c'}}/></a>
                    <a target="_blank" href="https://www.twitter.com/ourmomentumag"><TwitterIcon style={{marginLeft:'0.3em', color:'#9c9c9c'}}/></a>
                    <a target="_blank" href="https://www.linkedin.com/company/momentummagazine/"><LinkedInIcon style={{marginLeft:'0.3em', color:'#9c9c9c'}}/></a>
                    <Link to="/login"><PermIdentityIcon style={{marginLeft:'0.3em', color:'#9c9c9c'}}/></Link>
                </Grid>

                <Grid item xs={4} style={{justifyContent: 'flex-end'}}>
                    <PoppingUp />
                    {/*<Button variant='outlined' style={{marginRight:'1em', color:'#9c9c9c'}} target="_blank" href="#">Follow Us</Button>*/}
                    <Link to="/policies"><Button variant='outlined' style={{marginRight:'1em', color:'#9c9c9c'}} target="_blank" href="#">Our Policies</Button></Link>
                    <Button variant='outlined' style={{marginRight:'1em', backgroundColor:'#51AF9D', color:'white', borderColor:'#51AF9D'}} target="_blank" href="https://www.patreon.com/join/themomentummagazine">Patreon</Button>
                </Grid>
                <Grid item xs />
            </Grid>

        </Grid>

    )
}
