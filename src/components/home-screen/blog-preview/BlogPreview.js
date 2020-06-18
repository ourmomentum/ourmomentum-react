import { Grid, Grow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './BlogPreview.css';
import DesktopBlogPreview from './DesktopBlogPreview';

export default function BlogPreview(props) {
    const [pageLoaded, setPageLoaded] = useState(false);
    useEffect(() => {
        setPageLoaded(true);
    }, [])
    return (
        <Grid item xs={12} md={12}  style={{marginTop: props.margin}}>
            <Grid container>
                <Grid item xs />
                <Grid item xs={10} md={10} lg={8}>
                    <Grow in={pageLoaded} {...(pageLoaded ? { timeout: 1000 } : {})} style={{ transformOrigin: 'bottom' }}>
                        <DesktopBlogPreview posts={props.posts} />
                    </Grow>
                </Grid>
                <Grid item xs />
            </Grid>
        </Grid>
    )
}
