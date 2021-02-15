import React, { useState } from 'react'
import { Paper, Avatar, Typography, TextField, FormControlLabel, Button, Grid, Checkbox } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BACKEND_URL } from '../../constants/urls';

const REGISTER_USER_URL = BACKEND_URL + '/api/user/signup'

export default function Login() {
    const [signUpInfo, setSignUpInfo] = useState({});
    const theme = useTheme();

    const handleFieldChange = (e) => {
        let tempInfo = signUpInfo;
        tempInfo[e.target.name] = e.target.value;
        setSignUpInfo(tempInfo);
    }


    const handleSignUp = () => {
        if (signUpInfo.email && signUpInfo.email.length >= 8 && signUpInfo.email.length < 40 && signUpInfo.password && signUpInfo.password.length >= 8 && signUpInfo.password.length < 32) {
            axios.post(REGISTER_USER_URL, signUpInfo).then((res)=>console.log('We did it!')).catch((err)=>console.log('Uh oh ' + err));
        } else {
            console.log(signUpInfo);
        }
    }


    return (
    <Grid container style={{display: 'flex', justifyContent: 'center', marginTop: '15vh'}}>
        <Grid item xs={10} md={5} lg={4}>
            <Paper style={{padding: '2.5em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar src='logo.svg' style={{height: theme.spacing(12), width: theme.spacing(12)}}/>
                <Typography component="h1" variant="h5" style={{marginTop: '1em'}}>
                    Member Sign Up
                </Typography>
                <form noValidate>
                    <Grid container spacing={2}>
                    <Grid item xs={12} md={6}> 
						 <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="user_name"
                            label="First Name"
                            onChange={handleFieldChange}
                        />
                        </Grid>
                        <Grid item xs={12} md={6}> 
						 <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            onChange={handleFieldChange}
                        />
                        </Grid>
                        <Grid item xs={12} md={6}> 
						 <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleFieldChange}
                        />
                        </Grid>
                        <Grid item xs={12} md={6}> 
						 <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Access Code"
                            name="access_code"
                            autoFocus
                            onChange={handleFieldChange}
                        />
                        </Grid>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{marginTop: '1em'}}
                            onClick={handleSignUp}
                        >
                            Sign Up
                        </Button>
                        <Grid container style={{marginTop: '1em'}}>
                            <Grid item xs>
                                <Link to='/login' style={{textAlign: 'right', width: '100%'}}><Typography href="#" variant="body2">Already Have an Account?</Typography></Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
      </Grid>
    )
}
