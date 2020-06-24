import React from 'react'
import { Typography, Grid } from '@material-ui/core'

export default function MomentumFooter() {
    return (
        <Grid container style={{paddingTop: '2em', backgroundColor: 'lightgray', borderTopLeftRadius: '0.5em', borderTopRightRadius: '0.5em', marginTop: '15em'}}>
            <Grid item xs={12}>
                <Typography variant='body1'>Foot</Typography>
            </Grid>
        </Grid>
    )
}
