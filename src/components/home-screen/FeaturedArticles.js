<<<<<<< HEAD:src/components/home-screen/FeaturesArticles.js
import React from 'react'
import posts from './Testposts.js'
// import testposts from './testposts';
import ReturnListOfPosts from './Testposts.js'
import { Grid, Typography } from '@material-ui/core'
import BlogPreview from '../../blog-preview/BlogPreview'
=======
import React, { useState } from 'react'
import posts from './testposts'
import { Paper, Grid, Typography } from '@material-ui/core'

import BlogPreview from './blog-preview/BlogPreview'
>>>>>>> 23c4a12ccdec723a858b95895b1d1ca54030bfbe:src/components/home-screen/FeaturedArticles.js
import { useTheme } from '@material-ui/core/styles';


export default function FeaturedArticles() {
    const theme = useTheme();

    return (
        <div>
            <Grid container>
                <Grid item xs={12} style={{display: 'flex', justifyContent: 'center', paddingTop:'3em', paddingBottom:'0em'}}>
                    <Typography variant='h3' style={{fontWeight:'bold', letterSpacing: '0.25em'}}>FEATURED ARTICLES</Typography>
                </Grid>
            </Grid>
                <Grid container style={{width: '100%', marginTop: '2.5vh'}}>
<<<<<<< HEAD:src/components/home-screen/FeaturesArticles.js
                    {ReturnListOfPosts.forEach().map((post, i) => <BlogPreview margin = {((!theme.breakpoints.down('sm') ? 1 : (2 % 2) ) + 2 + 'em')} title={post.title}  content={post.content} />)}
=======
                    <BlogPreview margin = '2em' posts={posts}/>
>>>>>>> 23c4a12ccdec723a858b95895b1d1ca54030bfbe:src/components/home-screen/FeaturedArticles.js
                </Grid>
        </div>
    )
}
