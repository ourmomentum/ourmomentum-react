import React, { useState } from 'react'
import { Paper, Avatar, Typography, TextField, FormControlLabel, Button, Grid, Checkbox } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import firebase from './FirebaseTeams'
import MemberModal from './MemberModal'
import Carousel from 'react-material-ui-carousel'


export default function MemberCarousel(props){
  const members = props.members
  return(
    <Grid  style={{
      margin: '7em',
      marginBottom: '1em',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Typography variant="h4" style={{marginBottom: '1em', justifyContent: 'center', alignItems: 'center'}}>Department</Typography>
      <Carousel style={{margin: '7em',
        marginBottom: '1em'}}>
          {
            members.members ? members.members.map(member => (
              <MemberModal data={member}/>
            )) : 'Loading...'
          }
        </Carousel>
    </Grid>
  );
}
