import React, { useState, useEffect } from 'react';
import {Routes, Route, Link} from "react-router-dom"
import {Register, Login} from "./"

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

return (
    <header>
           <Routes>
                 <Route path='register' element={<Register />}></Route>
                 <Route path='login' element={<Login />}></Route>
             </Routes>
              <div className = "link-container">
                 const logSwitch = localStorage.getItem(token) ? <Link to={'/logout'} className='nav-item'>Logout</Link> :
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