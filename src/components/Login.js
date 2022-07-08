import React, { useState} from 'react';
import Header from './Header'
import {Link, Routes, Route} from 'react-router-dom'
import {loginUser} from '../api';

function Login(props) {

    const {username, password, setUsername, setPassword} = props;

async function handleLogin(event) {

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    
    event.preventDefault()
    console.log('this is your event', event)
    const backFromAPI = await loginUser(username, password)
    localStorage.setItem('token', backFromAPI)
    // backFromAPI ? console.log('Success') : console.log('User already exists') 
    console.log(backFromAPI) 
    setPassword('')
    setUsername('')
}

return (<form id = "login" onSubmit = {handleLogin}>
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
            </form>
            )}

            export default Login;