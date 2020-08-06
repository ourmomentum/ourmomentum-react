import React, { useState } from 'react'
import { Paper, Avatar, Typography, TextField, FormControlLabel, Button, Grid, Checkbox } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import firebase from './FirebaseTeams'
import MemberModal from './MemberModal'

var storage = firebase.storage();
var db = firebase.firestore();


db.collection("team").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()['name']}`);
    });
});

// React.useEffect(() => {
  //   var arr = []
  //   db.collection("team").get().then((querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
      //           arr.push(doc.data());
      //       });
      //   }).then(
        //     setMembers({members: arr})
        //   );
        // }, [members]);
export default function Team(){
  const [members, setMembers] = useState({members: []})
  const [query, setQuery] = useState([])
    React.useEffect(() => {
      db.collection("team").get().then((querySnapshot) => {
        setQuery(querySnapshot.docs.map(doc => doc.data()));
        // console.log(query)
      })
     if(query){
       setMembers(_prev => ({_prev, members: query}));
     }
   }, [members]);

    return(
      <Grid container style={{marginTop: '15em'}}>
      <h1>nice</h1>
      {
        members.members.map(member => (
          <MemberModal data={member}/>
        ))
      }
      </Grid>
    )
}
