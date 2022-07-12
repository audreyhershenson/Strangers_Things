import React, { useState } from 'react';
import Header from './Header'
import userPage from './userPage'
import { Link, Routes, Route } from 'react-router-dom'
import { loginUser } from '../api';
import { Logout } from './'

function Login(props) {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    async function handleLogin(event) {



        event.preventDefault()
        const backFromAPI = await loginUser(username, password)
        localStorage.setItem('token', backFromAPI);
        // backFromAPI ? console.log('Success') : console.log('User already exists') 
        console.log(backFromAPI)
        setPassword('')
        setUsername('')
        // userPage()

    }

    return (<div> {!localStorage.getItem('token') ? <><form id="login" onSubmit={handleLogin}>

        <div className="nameEntry">
            <label>Username:</label>
            <input type="text" id="inputUsernameLog" name="username"
                value={username}
                onChange={(event) => {
                    setUsername(event.target.value)
                    console.log(username);
                }}
                required />
        </div>
        <div className="passwordEntry">
            <label>Password:</label>
            <input type="text" id="inputPasswordLog" name="password"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value)
                    console.log(password);
                }}
                required />
        </div>

        <button id="loginButton">Login</button>
    </form></> : <Logout />}

    </div>)
}

export default Login;