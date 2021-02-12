import React, { useState, useContext, useEffect } from 'react'
import { Paper, Avatar, Typography, TextField, FormControlLabel, Button, Grid, Checkbox } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BACKEND_URL } from '../../constants/urls'
import { makeAuthorizedRequest, setCreds } from '../../utilities/MomentumRequests'
import { useHistory } from 'react-router-dom'
import UserContext from '../../utilities/UserContext'

const LOGIN_STATE_NONE = 0, LOGIN_WAITING = 1, LOGIN_FAILED = 2;



export default function Login() {
    const history = useHistory();
    const [signInInfo, setSignInInfo] = useState({});
    const [loginState, setLoginState] = useState(LOGIN_STATE_NONE);
    const [errorText, setErrorText] = useState('');
    const [userInfo, setUserInfo] = useContext(UserContext);
    const [remember, setRemember] = useState(false);


    useEffect(() => {
        sessionStorage.setItem('userState', userInfo);
    }, [userInfo])

    const theme = useTheme();

    const mapStateToProps = (state) => {
        console.log('State :' + state);
    }


    const handleFieldChange = (e) => {
        let tempInfo = signInInfo;
        tempInfo[e.target.name] = e.target.value;
        setSignInInfo(tempInfo);
    }

    const handleSignInWithRemember = () => {
        setLoginState(LOGIN_WAITING)
        if (signInInfo.username && signInInfo.username.length >= 8 && signInInfo.username.length < 40 && signInInfo.password && signInInfo.password.length >= 8 && signInInfo.password.length < 32) {
            axios.post(BACKEND_URL + '/login', {...signInInfo, rememberme: true}, {withCredentials: true})
            .then((res)=>{
                if (res && res.data) {
                    setUserInfo({loggedIn: true, user: {username: res.data.username}});
                    history.push('/')
                } else {
                    setLoginState(LOGIN_FAILED);
                    setErrorText('Login failed due to server error. Try again later.')
                }

            })
            .catch((err)=>{
                if (err.response && err.response.status === 401) {
                    setLoginState(LOGIN_FAILED);
                    setErrorText('Incorrect username or password.');
                }
            });
        } else {
            setLoginState(LOGIN_FAILED);
            setErrorText('Username or password too short.');
        }
    }

    const handleSignInNoRemember = () => {
        setLoginState(LOGIN_WAITING)
        if (signInInfo.username && signInInfo.username.length >= 8 && signInInfo.username.length < 40 && signInInfo.password && signInInfo.password.length >= 8 && signInInfo.password.length < 32) {
            axios.post(BACKEND_URL + '/login', signInInfo, {withCredentials: true})
            .then((res)=>{
                if (res && res.data) {
                    setCreds(res.data.creds);
                    setUserInfo({loggedIn: true, user: {username: res.data.username}});
                    history.push('/')
                } else {
                    setLoginState(LOGIN_FAILED);
                    setErrorText('Login failed due to server error. Try again later.')
                }

            })
            .catch((err)=>{
                if (err.response && err.response.status === 401 || err.response.status === 400) {
                    setLoginState(LOGIN_FAILED);
                    setErrorText('Incorrect username or password.');
                }
            });
        } else {
            setLoginState(LOGIN_FAILED);
            setErrorText('Username or password too short.');
        }
    }

    const handleRememberChange = (e) => {
        setRemember(e.target.checked);
    }

    return (
    <Grid container style={{display: 'flex', justifyContent: 'center', marginTop: '15vh'}}>
        <Grid item xs={10} md={5} lg={4}>
            <Paper style={{padding: '2.5em', display: 'flex', flexDirection: 'column', alignItems: 'center'}} elevation={2}>
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
                    control={<Checkbox value="remember" color="primary" checked={remember} onChange={handleRememberChange} />}
                    label="Remember me"
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{marginTop: '1em'}}
                    onClick={remember ? handleSignInWithRemember : handleSignInNoRemember}
                    disabled={(loginState === LOGIN_WAITING)}
                >
                    Sign In
                </Button>
                {(loginState == LOGIN_FAILED) ? <Typography style={{color: '#FF0000'}} variant='body2'> {errorText} </Typography> : ''}
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
