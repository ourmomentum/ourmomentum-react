import React from 'react'
import { Grid, List, ListItem, Typography, Divider } from '@material-ui/core'
import { Router, Switch, Route, useHistory, Link } from 'react-router-dom'
import NewUser from './user-actions/executive/NewUser';
import executiveRoutes from './user-actions/executive/ExecutiveRoutes'


export default function ExecutiveUser() {
    let history = useHistory();

    return (
        <React.Fragment>
            <Grid item xs={3} md={2} lg={1}>
                <List style={{borderRight: '1px solid rgba(0, 0, 0, 0.25)'}}>
                    {executiveRoutes.map((el, i) => {
                        return <ListItem><Typography key={i} variant='body1' color='primary'>{el.link}</Typography></ListItem>
                    })}
                </List>
                </Grid>
                <Grid item xs style={{border: '1px solid rgba(0, 0, 0, 0.25)', borderRadius: '0.25em', padding: '2em'}}>
                    <Router history={history}>
                        <Switch>
                            {executiveRoutes.map((el, i) => el.route)}
                        </Switch>
                    </Router>
            </Grid>
        </React.Fragment>
    )
}
