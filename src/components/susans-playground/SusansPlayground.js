import React from 'react'
import './SusansPlayground.css'
import {Grid} from '@material-ui/core';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © SusansPlayground '}
      <br />
      <Link color="inherit" href="https://youtu.be/dQw4w9WgXcQ">
        My Onlyfans
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));




 export default function SusansPlayground(props) {

const classes = useStyles();
const { description, title } = props;


    return (
       <Grid >
         <Grid container style = {{height: "100vh", width: "100vw", display: "flex", alignItems: "center"}}>
            <Grid item xs/>
            <p align = "center">
            fucking fucker
            </p>
           <Grid item xs/>

         </Grid>

         <footer className={classes.footer}>
        
          <Container maxWidth="lg">
            <Typography variant="h6" align="center" gutterBottom>
              {"so much code for so little"}
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              {"teeeeny tiny text"}
            </Typography>
            <Copyright />
            
          </Container>
         </footer>

        
    </Grid>
    
    

    )
}