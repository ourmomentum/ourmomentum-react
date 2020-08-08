import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';

export default function BlogPostPage(props){
  // const { titleName } = title;
  // const { postDate } = date;
  const {title, date, writers, artists, img} = props;

  const imgSize = {
    width: '40vw',
    display: 'flex',
    justifyContent: 'center',
    margin: '30px'
  }

    return(
      // <h4> Issue 1: Eureka </h4>

      <Grid style={{display: 'flex', justifyContent: 'center', margin: '120px'}}>
        <div>
          <Typography variant="h2" style={{fontWeight:'bold', textAlign: 'center', fontSize: '4vw'}}> {title} </Typography>
          <Typography variant="h5" style={{textAlign: 'center'}}> {date}</Typography>
          <center><Typography variant="p" style={{fontStyle: "oblique", textAlign: 'center'}}> Written by {writers}. Artwork by {artists}.</Typography></center>
          <img src={props.img} style={imgSize} alt="img"/>

        </div>


      </Grid>

    );
}
