import React, { useState} from 'react';
import Header from './Header';
import {Link, Routes, Route} from 'react-router-dom'
import {registerUser} from '../api';

function Register(props) {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
// const {username, password,setUsername, setPassword} = props;



async function handleRegister(event) {
  
        
    event.preventDefault()
    console.log('this is your event', event)
    const confirmedRegister = await registerUser(username, password)
    setPassword('')
    setUsername('')
    localStorage.setItem('token', confirmedRegister)
    // const token = localStorage.getItem("token");
    // confirmedRegister ? console.log('Success') : console.log('User already exists') 
}

return (<form id="register" onSubmit={handleRegister}>
    <div className="nameEntryReg">
        <label>Username:</label>
        <input type="text" id="inputUsernameReg" name="username"
            value={username}
            onChange={(event) => {
                setUsername(event.target.value)
                console.log(username);
            }}
            required />
    </div>
    <div className="passwordEntryReg">
        <label>Password:</label>
        <input type="text" id="inputPasswordReg" name="password"
            value={password}
            onChange={(event) => {
                setPassword(event.target.value)
                console.log(password);
            }}
            required />
    </div>
    <div className="passwordConfirmReg">
        <label>Confirm password:</label>
        <input type="text" id="inputPasswordCReg" name="passwordC" required />
    </div>
    <button type="submit" id="registerButton">Register</button>
</form>
)}

export default Register;
