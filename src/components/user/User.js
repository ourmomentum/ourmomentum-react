import React from 'react'
import { Grid, List, ListItem, Typography, Divider } from '@material-ui/core'
import ExecutiveUser from './ExecutiveUser'
import { Router, Switch, Route, useHistory, Link } from 'react-router-dom'
import NewUser from './user-actions/executive/NewUser';

export default function User(props) {

    return (
        <Grid container style={{padding: '4vw'}}>
            <ExecutiveUser />
        </Grid>
    )
}
