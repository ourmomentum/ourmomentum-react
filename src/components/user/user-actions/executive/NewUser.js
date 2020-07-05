import React from 'react'
import { Grid, TextField, Typography, Select, MenuItem, InputLabel, FormControl, Button } from '@material-ui/core'
import roles from './roles.json'

export default function NewUser() {
    return (
            <Grid container spacing={5}>
                <Grid item xs={12} style={{justifyContent: 'center'}}><Typography variant='h4'>New Momentum User</Typography></Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth variant='outlined' label='Full Name'/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth variant='outlined' label='Email'/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth variant='outlined' label='Username'/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth variant='outlined' label='Password'/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl style={{width: '100%'}}>
                        <InputLabel id="role-select-label">Role</InputLabel>
                        <Select variant='outlined' labelId='role-select-label' fullWidth>
                            {roles.map((el, i) => <MenuItem key={i} value={el.identifier}>{el.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                    <Button variant='contained' color='primary' style={{padding: '0.5em 2em'}}>Create User</Button>
                </Grid>
            </Grid>
    )
}
