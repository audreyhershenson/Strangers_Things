import React, {useState} from 'react';
// import Header from './Header'
import {Link, Routes, Route} from 'react-router-dom'
import {loginUser,getUser} from '../api';


async function userPage () {
    const toProfile = await loginUser();
    localStorage.getItem('token', toProfile);
    toProfile ? console.log('Success') : console.log('Not logged in');
    getUser();

    return (data)
}


export default userPage;