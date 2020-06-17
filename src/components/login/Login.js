import React from 'react'
import { Paper, Avatar, Typography, TextField, FormControlLabel, Button, Grid, Checkbox } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';


export default function Login() {

    const theme = useTheme();
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
                >
                    Sign In
                </Button>
                <Grid container style={{marginTop: '1em'}}>
                    <Grid item xs>
                    <Typography href="#" variant="body2">
                        Forgot password?
                    </Typography>
                    </Grid>
                </Grid>
                </form>
            </Paper>
        </Grid>
      </Grid>
    )
}
