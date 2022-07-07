import React, { useState, useEffect } from 'react';

import {
    storeCurrentUser,
    clearCurrentUser
} from '../auth';

import {
    registerUser
} from '../api';
//move to index

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


const Header = ({
    
    currentUser,
    setCurrentUser
}) => {
    
    //move to login
    async function handleSubmit(event) {
        event.preventDefault()
        console.log('this is your event', event)
        const backFromAPI = await registerUser(username, password)
        backFromAPI ? console.log('Success') : console.log('User already exists')  
    }
    return (
        <header>
            <h1>Strangers' Things</h1>
            <form  id = "register" onSubmit = {handleSubmit}>
                <div className="nameEntry">
                    <label>Username:</label>
                    <input type="text" id="inputUsername" name="username" required />
                </div>
                <div className="passwordEntry">
                    <label>Password:</label>
                    <input type="text" id="inputPassword" name="password" required />
                </div>
                <div className="passwordConfirm">
                    <label>Confirm password:</label>
                    <input type="text" id="inputPasswordC" name="passwordC" required />
                </div>
                <button type="submit" id = "registerButton">Register</button>
                <button type="submit" id = "loginButton">Login</button>
            </form>

        </header>
    );
}

export default Header;