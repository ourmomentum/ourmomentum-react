import React from 'react'
import { Typography, Grid, Button, Link } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function MomentumFooter() {
    return (
        <Grid container style={{paddingTop: '2em', paddingBottom: '2em', backgroundColor: '#ededed', /*borderTopLeftRadius: '0.5em', borderTopRightRadius: '0.5em',*/ marginTop: '15em'}}>
            <Grid container>
                <Grid item xs />
                <Grid item xs={4}>
                    <Typography style={{fontSize:'1.05em', color:'#9c9c9c'}}>© 2020 Momentum Magazine</Typography>
                    <Link target="_blank" href="https://www.instagram.com/momentumagazine"><InstagramIcon style={{marginLeft:'0.6em', color:'#9c9c9c'}}/></Link>
                    <Link target="_blank" href="https://www.twitter.com/ourmomentummag"><TwitterIcon style={{marginLeft:'0.3em', color:'#9c9c9c'}}/></Link>
                    <Link target="_blank" href="https://www.linkedin.com/company/momentummagazine/"><LinkedInIcon style={{marginLeft:'0.3em', color:'#9c9c9c'}}/></Link>
                </Grid>
                <Grid item xs={4} style={{justifyContent: 'flex-end'}}>
                    <Button variant='outlined' style={{marginRight:'1em', color:'#9c9c9c'}} target="_blank" href="#">Follow Us</Button>
                    <Button variant='outlined' style={{marginRight:'1em', color:'#9c9c9c'}} target="_blank" href="#">Our Policies</Button>
                    <Button variant='outlined' style={{marginRight:'1em', backgroundColor:'#51AF9D', color:'white', borderColor:'#51AF9D'}} target="_blank" href="https://www.patreon.com/join/themomentummagazine">Patreon</Button>
                </Grid>
                <Grid item xs />
            </Grid>

        </Grid>

    )
}
