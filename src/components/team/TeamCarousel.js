import React, { useState } from 'react'
import { Paper, Avatar, Typography, TextField, FormControlLabel, Button, Grid, Checkbox } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import firebase from './FirebaseTeams'
import MemberModal from './MemberModal'
import Carousel from 'react-material-ui-carousel'


var storage = firebase.storage();
var db = firebase.firestore();

export default function TeamCarousel(props){
  // const [members, setMembers] = useState({members: []})
  //
  //   React.useEffect(() => {
  //    db.collection("team").get().then((querySnapshot) => {
  //       setMembers(_prev => ({_prev, members: querySnapshot.docs.map(doc => doc.data())}));
  //    })
  //  }, []);
  //  console.log(members)

    return(
      <React.Fragment>
      <Typography component="h1" variant="h2" style={{ marginBottom: '0.5em' }}>
      <b>Contact Us</b>
      </Typography>
      <Grid container xs={12} style={{marginTop: '3em', justifyContent: 'center'}} spacing={10}>
        <Grid >
          <Typography variant="h4">Department</Typography>
          <Carousel>
            {
              props.members.members ? props.members.members.map(member => (

                <MemberModal data={member}/>
              )) : 'Loading...'
            }
          </Carousel>
        </Grid>
        <Grid >
          <Typography variant="h4">Department</Typography>
          <Carousel>
            {
              members.members ? members.members.map(member => (

                <MemberModal data={member}/>
              )) : 'Loading...'
            }
          </Carousel>
        </Grid>
        <Grid >
          <Typography variant="h4">Department</Typography>
          <Carousel>
            {
              members.members ? members.members.map(member => (

                <MemberModal data={member}/>
              )) : 'Loading...'
            }
          </Carousel>
        </Grid>
      </Grid>
      <Grid container xs={12} style={{marginTop: '3em', justifyContent: 'center'}} spacing={10}>
        <Grid >
          <Typography variant="h4">Department</Typography>
          <Carousel>
            {
              members.members ? members.members.map(member => (

                <MemberModal data={member}/>
              )) : 'Loading...'
            }
          </Carousel>
        </Grid>
        <Grid >
          <Typography variant="h4">Department</Typography>
          <Carousel>
            {
              members.members ? members.members.map(member => (

                <MemberModal data={member}/>
              )) : 'Loading...'
            }
          </Carousel>
        </Grid>
        <Grid >
          <Typography variant="h4">Department</Typography>
          <Carousel>
            {
              members.members ? members.members.map(member => (

                <MemberModal data={member}/>
              )) : 'Loading...'
            }
          </Carousel>
        </Grid>
      </Grid>

      </React.Fragment>
    )
}
