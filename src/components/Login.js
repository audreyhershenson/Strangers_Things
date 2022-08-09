//import resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from '../api';


//create component///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const Login = ({
    username,
    password,
    setUsername,
    setPassword,
}) => {
    
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    async function handleLogin(event) {
        event.preventDefault();
        try {
            const result = await loginUser(username, password);
            console.log(result) //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            navigate("/Post");
            if (result) {
                console.log("logged in")
                localStorage.setItem("token", result.token)
                localStorage.setItem("username", loggedInUsername)
                setLoggedIn(true);
                setUsername(loggedInUsername)
            }
        } catch (error) {
            console.error;
        }
    }

    //return login component/////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////

    return (
        <div>
            <form id="login" onSubmit={handleLogin}>
                <div>Log in to Stranger's Things</div>
                <div className="nameEntry">
                    <label>Username:
                        <input
                            className="input"
                            placeholder="Enter username here..."
                            name="username"
                            type="text"
                            value={username}
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }} required
                        />
                    </label>
                </div>
                <div className="passwordEntry">
                    <label>Password:
                        <input
                            className="input"
                            placeholder="Enter password here..."
                            name="password"
                            type="password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }} required
                        />
                    </label>
                </div>
                <button id="loginButton" type="submit">Login</button>
            </form>
        </div>);
};

//export resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export default Login;