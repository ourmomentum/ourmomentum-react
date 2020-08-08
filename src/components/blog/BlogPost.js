import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import recipe2 from './images/recipes_2.png'




export default function BlogPost(props){
  // const { titleName } = title;
  // const { postDate } = date;
  const {title, date, writers, artists, link, img} = props;

  const imgSize = {
    width: '40vw',
    display: 'flex',
    justifyContent: 'center',
    margin: '30px'
  }



  // const element = <Typography variant="h1" style={{fontWeight:'bold', textAlign: 'center'}}> {titleName} </Typography>

    return(
      // <h4> Issue 1: Eureka </h4>

      <Grid>
        <div>
          <Typography variant="h2" style={{fontWeight:'bold', textAlign: 'center', fontSize: '4vw'}}> {title} </Typography>
          <Typography variant="h5" style={{textAlign: 'center'}}> {date}</Typography>
          <center><Typography variant="p" style={{fontStyle: "oblique", textAlign: 'center'}}> Written by {writers}. Artwork by {artists}.</Typography></center>
          <img src={props.img} style={imgSize} alt="img" />

          <a href={props.link} target="_blank">
            <button type="button" style={{marginRight: '1em', backgroundColor: 'rgb(81, 175, 157)', color: 'white', border: 'none', padding: '1.5vw', outline: 'none'}}> Read more </button>
          </a>
        </div>


      </Grid>

    );
}
