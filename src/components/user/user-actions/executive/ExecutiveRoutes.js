import React from 'react'
import NewUser from "./NewUser";
import { Route, Link } from "react-router-dom";

export default [
    {
        link: <Link to='/user/new-user' style={{color: 'inherit'}}>New User</Link>,
        route: <Route path='/user/new-user' component={NewUser} />
    },
    {
        link: <Link to='/user/new-user' style={{color: 'inherit'}}>Test 1</Link>,
        route: <Route path='/user/new-user' component={NewUser} />
    },
    {
        link: <Link to='/user/new-user' style={{color: 'inherit'}}>Test 2</Link>,
        route: <Route path='/user/new-user' component={NewUser} />
    },
    {
        link: <Link to='/user/new-user' style={{color: 'inherit'}}>Test 3</Link>,
        route: <Route path='/user/new-user' component={NewUser} />
    }
]