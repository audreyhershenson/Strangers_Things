import React, { useState, useEffect } from 'react';
import {Link, Routes, Route} from 'react-router-dom'

import Login from './Login'
import Register from './Register'

import {
    storeCurrentUser,
    clearCurrentUser
} from '../auth';

import {
    registerUser,
    loginUser
} from '../api';
//move to index

const Header = ({

    currentUser,
    setCurrentUser
    
}) => {

    function showRegister() {}  
    function showLogin() {}

    return (
        <header>
            <Routes>
                <Route path='register' element={<Register />}></Route>
                <Route path='login' element={<Login />}></Route>
            </Routes>
             <div className = "link-container">
                <Link to={'/login'} className='nav-item'>Login</Link>
                <Link to={'/register'} className='nav-item'>Register</Link>
                {/* <button type="submit" id="showRegister" onSubmit={showRegister}>Register</button>
                <button type="submit" id='showLogin' onSubmit={showLogin}>Log in</button>

                <Login username = {username} setUsername = {setUsername} password = {password} setPassword = {setPassword} />
                <Register username = {username} setUsername = {setUsername} password = {password} setPassword = {setPassword} /> */}
            </div>
        </header>
    );
}

export default Header;