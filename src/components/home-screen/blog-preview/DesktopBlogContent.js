import React, { useEffect, useState } from 'react'
import { Grid, Typography, Fade } from '@material-ui/core'

export default function DesktopBlogContent(props) {
    const [shouldFade, setShouldFade] = useState(false);
    const [title, setTitle] = useState(props.currentPost.title);
    const [content, setContent] = useState(props.currentPost.content);


    useEffect(()=>{
        setShouldFade(true);
    }, [props.newPost])

    const onNewTextComplete = () => {
        setTitle(props.newPost.title);
        setContent(props.newPost.content);
        setShouldFade(false);
    }
    return (
        <React.Fragment>
            <Grid item xs={4}>
                <Grid container>
                    <Grid item xs={12} style={{padding: '0.25em 0.44em'}}>
                        <Fade in={!shouldFade} onExited={onNewTextComplete}>
                            <img src='testim.jpg' style={{width: '100%', borderRadius: '1em'}} alt='Article Imagery' />
                        </Fade>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs style={{alignItems: 'flex-start'}}>
            <Fade in={!shouldFade} onExited={onNewTextComplete}>

                <Grid container>
                    <Grid container>
                        <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                                <Typography variant="h3" style={{fontWeight: 'bold'}}>{title}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container style={{marginTop: '1em', marginBottom: '0.5em'}}>
                        <Grid item xs={12}>
                            <Typography variant='body1' style={{fontSize: '1.2em', textAlign: 'justify'}}>{content.substring(0, 375) + '...'}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Fade>
            </Grid>
        </React.Fragment>
    )
}
