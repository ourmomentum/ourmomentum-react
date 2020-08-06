import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {Grid, Typography} from '@material-ui/core'
import DialogContent from '@material-ui/core/DialogContent';


import firebase from './FirebaseTeams'
var storage = firebase.storage();


export default function MemberModal(props) {

  const [open, setOpen] = React.useState(false);
  const data = props.data
  const [member, setMember] = React.useState({image: 'logojpg.jpg', bio: data['bio'], name: data['name'], position: data['position']})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const filename = 'team/' + data['filename'] + '.png'
  React.useEffect(() =>{
    storage.ref('/').child(filename).getDownloadURL().then((url) => {
      setMember({image: url, bio: member.bio, name: member.name, position: member.position})
    })
  }, [])
  console.log(member)


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {member.name}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent style={{padding: '0'}}>
          <Grid container xs={12} style={{overflow:'hidden'}}>
            <Grid item xs={5} style={{width: 'inherit', maxHeight: '300px'}}>
              <img src={member.image} style={{objectFit: 'cover', maxWidth: '100%', height: 'inherit'}}/>
            </Grid>
            <Grid xs={6} style={{marginTop: '1em', marginBottom:'1em', marginLeft: '1.5em', marginRight:'1.5em'}} scroll="body">
              <Typography variant="h4" style={{marginBottom: '0.25em'}}>{member.name}</Typography>
              <Typography variant="subtitle2" style={{marginBottom: '0.5em', color:'#f5a711'}}>{member.position}</Typography>
              <Typography align='justify' variant="body2">{member.bio}</Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
