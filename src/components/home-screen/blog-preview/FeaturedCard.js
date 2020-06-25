import React, { useEffect, useState } from 'react'
import { Grid, Typography, Fade, Divider, Button } from '@material-ui/core'

export default function FeaturedCard(props) {
    const {title, content} = props.post;
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <img src='testim.jpg' style={{width: '100%', borderTopLeftRadius: '1em', borderTopRightRadius: '1em'}} alt='Article Imagery' />
            </Grid>

            <Grid item xs style={{alignItems: 'flex-start', margin: '2em 2em 0 2em'}}>
                <Grid container>
                    <Grid container>
                        <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                                <Typography variant="h3" style={{fontWeight: 'bold'}}>{title}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container style={{marginTop: '1em', marginBottom: '0.5em'}}>
                        <Grid item xs={12}>
                            <Typography variant='body1' style={{fontSize: '1.2em', textAlign: 'justify'}}>{content.substring(0, 375) + '...'}  <Button color='primary'>Read More</Button></Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
