import React, { useState } from 'react'
import { Grid, TextField, Typography, Select, MenuItem, InputLabel, FormControl, Button, Snackbar, SnackbarContent } from '@material-ui/core'
import roles from './roles.json'
import { makeAuthorizedRequest } from '../../../../utilities/MomentumRequestsOld';
import { MOMENTUM_SIGNATURE_GREEN, BG_MOMENTUM_RED } from '../../../../constants/colors';

export default function NewUser() {
    const [userDetails, setUserDetails] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailure, setShowFailure] = useState(false);
    const REGISTER_USER_URL = '/api/user/signup'

    const handleFormChange = (e) => {
        setUserDetails({...userDetails, [e.target.name]: e.target.value});
    }

    const handleFormSumbit = () => {
        makeAuthorizedRequest(REGISTER_USER_URL, userDetails).then(() => setShowSuccess(true)).catch(() => setShowFailure(true));
    }
    return (
            <Grid container spacing={5}>
                <Grid item xs={12} style={{justifyContent: 'center'}}><Typography variant='h4'>New Momentum User</Typography></Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth variant='outlined' label='Full Name' name='name' onChange={handleFormChange}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth variant='outlined' label='Email' name='email' onChange={handleFormChange}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth variant='outlined' label='Username' name='username' onChange={handleFormChange}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth variant='outlined' label='Password' name='password' onChange={handleFormChange}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl style={{width: '100%'}}>
                        <InputLabel id="role-select-label">Role</InputLabel>
                        <Select variant='outlined' labelId='role-select-label' name='role' fullWidth onChange={handleFormChange}>
                            {roles.map((el, i) => <MenuItem key={i} value={el.identifier}>{el.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                    <Button variant='contained' color='primary' style={{padding: '0.5em 2em'}} onClick={handleFormSumbit}>Create User</Button>
                </Grid>
                <Snackbar open={showSuccess} onClose={() => setShowSuccess(false)} message='User successfully created'></Snackbar>
                <Snackbar open={showFailure} onClose={() => setShowFailure(false)} message='Error while trying to create user'></Snackbar>

            </Grid>
    )
}
