import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom"
import { Register, Login, Logout } from "./"

import {
    storeCurrentUser,
    clearCurrentUser
} from '../auth';

import {
    registerUser,
    loginUser,
    getUser
} from '../api';
//move to index

const Header = ({
    currentUser,
    setCurrentUser
}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log(localStorage.getItem('token'))
    return (<div>{localStorage.getItem('token') ? <><header><Logout /></header></> : <><header><Routes>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/Login' element={<Login />}></Route>
    </Routes>
        <Link to='/Login'>Log In </Link>
        <Link to='/Register'>Register</Link>
    </header></>}</div>)

};


export default Header;