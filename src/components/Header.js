import React, { useState, useEffect } from 'react';

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

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <header>
            <Login username = {username} password = {password} />
            <Register username = {username} password = {password} />
        </header>
    );
}

export default Header;