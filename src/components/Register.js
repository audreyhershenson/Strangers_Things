//import resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

//create component///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const Register = ({
    username,
    password,
    setUsername,
    setPassword,
    loggedIn,
}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    async function handleRegister(event) {
        event.preventDefault();
        try {
            const registeredUsername= event.target[0].value
            const confirmedRegister = await (username, password);
            navigate("/Post");
            if (confirmedRegister) {
                localStorage.setItem("token", confirmedRegister)
                localStorage.setItem("username", registeredUsername)
                loggedIn(true);
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
            <div>Register for Stranger's Things</div>
            <form id="register" onSubmit={handleRegister}>

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
                <button id="registerButton" type="submit">Register</button>
            </form>
        </div>);
};

//export resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export default Register;