import React, { useState } from 'react'
import { Paper, Avatar, Typography, TextField, FormControlLabel, Button, Grid, Checkbox } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BACKEND_URL } from '../../constants'
import { makeAuthorizedRequest } from '../../utilities/MomentumRequests'
import { useHistory } from 'react-router-dom'

export default function Login() {
    const history = useHistory();
    const [signInInfo, setSignInInfo] = useState({});
    const theme = useTheme();

    const handleFieldChange = (e) => {
        let tempInfo = signInInfo;
        tempInfo[e.target.name] = e.target.value;
        setSignInInfo(tempInfo);
    }

    const handleSignIn = () => {
        if (signInInfo.username.length >= 8 && signInInfo.username.length < 40 && signInInfo.password.length >= 8 && signInInfo.password.length < 32) {
            axios.post(BACKEND_URL + '/login', signInInfo, {withCredentials: true}).then((res)=>console.log('We did it!')).catch((err)=>console.log('Uh oh ' + err));
        }
    }

    return (
    <Grid container style={{display: 'flex', justifyContent: 'center', marginTop: '15vh'}}>
        <Grid item xs={10} md={5} lg={4}>
            <Paper style={{padding: '2.5em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar src='logo.svg' style={{height: theme.spacing(12), width: theme.spacing(12)}}/>
                <Typography component="h1" variant="h5" style={{marginTop: '1em'}}>
                    Member Login
                </Typography>
                <form noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Username"
                    name="username"
                    autoComplete="momentum_user"
                    autoFocus
                    onChange={handleFieldChange}
                />
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
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{marginTop: '1em'}}
                    onClick={handleSignIn}
                >
                    Sign In
                </Button>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{marginTop: '1em'}}
                    onClick={()=>{axios.get(BACKEND_URL + '/refresh', {withCredentials: true}).then()}}
                >
                    Test Refresh
                </Button>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{marginTop: '1em'}}
                    onClick={()=>{makeAuthorizedRequest('/authorized/test', null, history).then(res => console.log(res)).catch(err=>console.log(err))}}
                >
                    Test Authorized Request
                </Button>
                <Grid container style={{marginTop: '1em'}}>
                    <Grid item xs>
                    <Typography href="#" variant="body2">
                        Forgot password?
                    </Typography>
                    </Grid>
                    <Grid item xs>
                        <Link to='/register' style={{textAlign: 'right', width: '100%'}}><Typography variant='body2'>Have an access code?</Typography></Link>
                    </Grid>
                </Grid>
                </form>
            </Paper>
        </Grid>
      </Grid>
    )
}
