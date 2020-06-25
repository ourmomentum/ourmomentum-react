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
                    <Grid item xs={12} style={{}}>
                        <Fade in={!shouldFade} onExited={onNewTextComplete}>
                            <div className="imageDiv">
                            <img src='Economics.jpg' style={{width: '100%', marginRight:'1em'}} alt='Article Imagery' />
                            </div>
                        </Fade>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs style={{alignItems: 'flex-start'}}>
            <Fade in={!shouldFade} onExited={onNewTextComplete}>

                <Grid container>
                    <Grid container>
                        <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                                <Typography style={{fontWeight: 'bold', marginBottom:'0.25em', fontSize:'1.75em', textTransform:'uppercase'}}>{title}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container style={{}}>
                        <Grid item xs={12}>
                            <Typography variant='body1' style={{fontSize: '1.2em', textAlign: 'justify'}}>{content.substring(0, 275) + '...'} {<a href="#" style={{fontWeight:'bold', fontSize:'0.9em', textTransform:'uppercase', color:'#51AF9D'}}>Read More</a>}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Fade>
            </Grid>
        </React.Fragment>
    )
}
