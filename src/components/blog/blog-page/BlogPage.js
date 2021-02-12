import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import './BlogPage.css'
import { useTheme } from '@material-ui/core/styles';




export default function BlogPage(props){

  const {title, date, writers, artists, link, img} = props;

  const imgSize = {
    width: '30vw',
    display: 'flex',
    justifyContent: 'center',
    margin: '30px'
  }



  // const element = <Typography variant="h1" style={{fontWeight:'bold', textAlign: 'center'}}> {titleName} </Typography>

    return(
      // <h4> Issue 1: Eureka </h4>

      <Grid container>

          <Grid item xs={12} className='blog-container-center'><Typography variant="h2" style={{fontWeight:'bold', textAlign: 'center', fontSize: '4vw', letterSpacing: '4px'}}> {title} </Typography></Grid>
          <Grid item xs={12} className='blog-container-center'><Typography variant="body1" style={{fontStyle: "oblique", textAlign: 'center'}}> {'Written by ' + writers +'.' + ((artists) ? 'Artwork by ' + artists + '.' : '')}</Typography></Grid>
          <Grid item xs={12} className='blog-container-center'><div style={{width: '40%', height: '1px', backgroundColor: '#AAAAAA'}} /></Grid>
          <Grid item xs={12} className='blog-container-center'> <img src={props.img} style={imgSize} alt="img" /> </Grid>
          <Grid container>
            <Grid item xs />
            <Grid item xs={12} sm={10} md={8} lg={6} className='blog-container-center'>
                <div style={{width: '100%', padding: '0 2em'}}>
                    <Typography variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique elementum felis, ac volutpat dui pellentesque a. Mauris sollicitudin ornare dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam hendrerit ex ante, id imperdiet est lobortis sed. Duis semper velit tortor, ultrices fringilla nulla condimentum et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis facilisis metus vitae enim auctor, eu lobortis nunc sollicitudin. Proin aliquet, nibh convallis posuere placerat, mauris elit pellentesque orci, nec euismod sapien ligula eu lorem. Morbi in lectus vestibulum, malesuada tortor a, semper ante. Praesent volutpat magna ac lorem tincidunt porta. Cras ex quam, feugiat sit amet est eu, sodales ultricies augue.
                    </Typography>
                </div>
            </Grid>
            <Grid item xs />
          </Grid>

      </Grid>

    );
}
