import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {Grid, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import ButtonBase from '@material-ui/core/ButtonBase';


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

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: '300px',
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 200,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
      overflow: 'hidden',
      marginLeft: '1em',
      marginRight: '1em'
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
      width: 'inherit',
      overflow: 'hidden',
      objectFit: 'cover',
      maxWidth: '100%',
      minHeight: '100%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));
  const classes = useStyles();
  return (
    <React.Fragment>
    <ButtonBase
          focusRipple
          key={member.name}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '400px',
            height: '200px'
          }}
          onClick={handleClickOpen}
        >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${member.image})`,
          }}
        />
          {/*
            <img src = {member.image} className={classes.imageSrc} />
            */}
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {member.name}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
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
    </React.Fragment>
  );
}
