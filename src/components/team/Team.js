import React, { useState } from 'react'
import { Paper, Avatar, Typography, TextField, FormControlLabel, Button, Grid, Checkbox } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import firebase from './FirebaseTeams'
import MemberModal from './MemberModal'

var storage = firebase.storage();
var db = firebase.firestore();

export default function Team(){
  const [members, setMembers] = useState({members: []})

    React.useEffect(() => {
     db.collection("team").get().then((querySnapshot) => {
        setMembers(_prev => ({_prev, members: querySnapshot.docs.map(doc => doc.data())}));
     })
   }, []);
   
    return(
      <Grid container style={{marginTop: '15em'}}>
      <h1>nice</h1>
      {
        members.members ? members.members.map(member => (
          <MemberModal data={member}/>
        )) : 'Loading...'
      }
      </Grid>
    )
}
