import React from 'react'
import posts from './testposts'
import testposts from './testposts';
import { Grid, Typography } from '@material-ui/core'
import BlogPreview from '../../blog-preview/BlogPreview'
import { useTheme } from '@material-ui/core/styles';


export default function FeaturesArticles() {
    const theme = useTheme();

    return (
        <div>    
            <Grid container>
                <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', paddingTop:'1.5em', paddingBottom:'0em'}}>
                    <Typography variant='h3' style={{fontWeight:'bold', letterSpacing: '0.25em'}}>FEATURED ARTICLES</Typography>
                </Grid>
            </Grid>
                <Grid container style={{width: '100%', marginTop: '2.5vh'}}>
                    {testposts.map((post, i) => <BlogPreview margin = {((!theme.breakpoints.down('sm') ? 1 : (2 % 2) ) + 2 + 'em')} title={post.title}  content={post.content} />)}
                </Grid>
        </div>
    )
}
