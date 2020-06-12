import React, { useState, useEffect } from 'react'
import { Paper, Grid, Typography, Grow, Button } from '@material-ui/core'

export default function BlogPreview(props) {
    const [pageLoaded, setPageLoaded] = useState(false);
    useEffect(() => {
        setPageLoaded(true);
    }, [])
    return (
        <Grid item xs={12} md={6}  style={{marginTop: props.margin}}>
            <Grid container>
                <Grid item xs />
                <Grid item xs={10}>
                    <Grow in={pageLoaded} {...(pageLoaded ? { timeout: 1000 } : {})} style={{ transformOrigin: 'bottom' }}>
                        <Paper style={{borderRadius: "1em", padding: "2em", paddingBottom: "1em", minHeight: "40vh", width: "100%"}} elevation={5}>
                            <Grid container>
                            <Grid item xs />
                                <Grid item xs={13}>
                                    <Typography variant="h4" style={{}}>{props.title}</Typography>
                                </Grid>
                                <Grid item xs />
                            </Grid>
                            <Grid container style={{marginTop: '1em', marginBottom: '0.5em'}}>
                                <Grid item xs={12}>
                                    <Typography variant="body1">{props.content}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs />
                                <Grid item style={{display: "flex", justifyItems: "center"}} xs = {3}>
                                    <Button>Read More</Button>
                                </Grid>
                                <Grid item xs />
                            </Grid>
                        </Paper>
                        </Grow>
                </Grid>
                <Grid item xs />
            </Grid>
        </Grid>
    )
}
