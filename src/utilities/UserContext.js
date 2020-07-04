import React from 'react'
let prevState = {};

try {
    prevState = JSON.parse(sessionStorage.getItem('userState'));
} catch (e) {}

const UserContext = React.createContext([prevState, () => {}]);
export default UserContext;
