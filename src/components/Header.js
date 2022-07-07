import React, { useState, useEffect } from 'react';

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
    //move to login
    async function handleRegister(event) {
        event.preventDefault()
        console.log('this is your event', event)
        const backFromAPI = await registerUser(username, password)
        localStorage.setItem('token', token)
        // backFromAPI ? console.log('Success') : console.log('User already exists') 
        console.log(backFromAPI) 
    }

    // async function handleLogin(event) {
    //     event.preventDefault()
    //     console.log('this is your event', event)
    //     const backFromAPI = await loginUser(username, password)
    //     // backFromAPI ? console.log('Success') : console.log('User already exists') 
    //     console.log(backFromAPI) 
    // }
    return (
        <header>
            <form id = "register" onSubmit = {handleRegister}>
                <div className="nameEntry">
                    <label>Username:</label>
                    <input type="text" id="inputUsernameReg" name="username"  
                    value = {username}
                    onChange={(event) =>{setUsername(event.target.value)
                    console.log(username);}}
                    required />
                </div>
                <div className="passwordEntry">
                    <label>Password:</label>
                    <input type="text" id="inputPasswordReg" name="password" 
                    value = {password}
                    onChange={(event) =>{setPassword(event.target.value)
                    console.log(password);}}    
                    required />
                </div>
                <div className="passwordConfirm">
                    <label>Confirm password:</label>
                    <input type="text" id="inputPasswordCReg" name="passwordC" required />
                </div>
                <button type="submit" id = "registerButton">Register</button>
            </form>

            {/* <form id = "login" onSubmit = {handleLogin}>
                <div className="nameEntry">
                    <label>Username:</label>
                    <input type="text" id="inputUsernameLog" name="username"  
                    value = {username}
                    onChange={(event) =>{setUsername(event.target.value)
                    console.log(username);}}
                    required />
                </div>
                <div className="passwordEntry">
                    <label>Password:</label>
                    <input type="text" id="inputPasswordLog" name="password" 
                    value = {password}
                    onChange={(event) =>{setPassword(event.target.value)
                    console.log(password);}}    
                    required />
                </div>
                <button type="submit" id = "loginButton">Login</button>
            </form> */}
        </header>
    );
}

export default Header;