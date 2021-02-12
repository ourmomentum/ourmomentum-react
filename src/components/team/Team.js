import React, { useState } from 'react'
import { Paper, Avatar, Typography, TextField, FormControlLabel, Button, Grid, Checkbox } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import firebase from './FirebaseTeams'
import MemberCarousel from './MemberCarousel'

import MemberModal from './MemberModal'
import Carousel from 'react-material-ui-carousel'

var storage = firebase.storage();
var db = firebase.firestore();

export default function Team(){
  const [members, setMembers] = useState({members: []})
  const [website, setWebsites] = useState({websites: []})
    React.useEffect(() => {
     db.collection("team").get().then((querySnapshot) => {
        setMembers(_prev => ({_prev, members: querySnapshot.docs.map(doc => doc.data())}));
     })
   }, []);


   website.websites = [members].filter(function(member) { return member.position = "Website Developer"})

   console.log(website) 
    return(
      <React.Fragment>
        <Typography component="h1" variant="h2" style={{ marginBottom: '0.5em' }}>
        <b>Contact Us</b>
        </Typography>
      <Grid container xs={12} style={{marginTop: '3em', justifyContent: 'center'}} spacing={10}>
      <MemberCarousel members={ members } />


      {/*
        members.members ?
        : 'Loading...'
      */}
      </Grid>


      </React.Fragment>
    )
}
