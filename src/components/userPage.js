import React, {useState} from 'react';
// import Header from './Header'
import {Link, Routes, Route} from 'react-router-dom'
import {loginUser} from '../api';

async function userPage (event) {
const toProfile = await loginUser()
localStorage.getItem('token', toProfile)
toProfile ? console.log('Success') : console.log('Not logged in') 
//     console.log(backFromAPI)

// const []



return (<div>User Page</div>)
}




// async function handleRegister(event) {
  
        
//     event.preventDefault()
//     console.log('this is your event', event)
//     const backFromAPI = await registerUser(username, password)
//     console.log(backFromAPI)
//     setPassword('')
//     setUsername('')
//     localStorage.setItem('token', backFromAPI)
//     // const token = localStorage.getItem("token");
//     // backFromAPI ? console.log('Success') : console.log('User already exists') 
//     console.log(backFromAPI)
// }

// return (<form id="register" onSubmit={handleRegister}>
//     <div className="nameEntryReg">
//         <label>Username:</label>
//         <input type="text" id="inputUsernameReg" name="username"
//             value={username}
//             onChange={(event) => {
//                 setUsername(event.target.value)
//                 console.log(username);
//             }}
//             required />
//     </div>
//     <div className="passwordEntryReg">
//         <label>Password:</label>
//         <input type="text" id="inputPasswordReg" name="password"
//             value={password}
//             onChange={(event) => {
//                 setPassword(event.target.value)
//                 console.log(password);
//             }}


export default userPage;