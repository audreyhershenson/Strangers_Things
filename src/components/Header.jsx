import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from "react-router-dom"
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
    loggedIn,
    setCurrentUser
}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log(localStorage.getItem('token'))
    
    localStorage.getItem(!'token');
    ?
    console.log("logged out");
    
    return (
    <div id="header">
       

            <>
                <header>
                    <Routes>
                        <Route path='/Register' element={<Register />}></Route>
                        <Route path='/Login' element={<Login />}></Route>
                    </Routes>
                    <NavLink to='/Login'>Log In </NavLink>
                    <NavLink to='/Register'>Register</NavLink>
                    
                </header>      
            </>
            :
            <>
                <header>
                    <Logout />
                </header>
            </>
    </div>)

};


export default Header;