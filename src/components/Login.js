import React, { useState } from 'react';
import { loginUser } from '../api';
import { Logout } from './'

const Login = ({
    username,
    password,
    setUsername,
    setPassword,
    loggedIn,
}) => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    localStorage.setItem('token', backFromAPI);

    async function handleLogin(event) {
        event.preventDefault();
        try {
            const confirmedLoggedIn = await loginUser(username, password);
            if (confirmedLoggedIn) {
                loggedIn(true);
                setUsername('');
                setPassword('');
            }
        } catch (error) {
            console.error;
        }
    }

    return (
        <div>
            <div>Log in now!</div>
            {!localStorage.getItem('token') ? <><form id="login" onSubmit={handleLogin}>

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
                                console.log("username: ", username)
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
                            type="text"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }} required
                        />
                    </label>
                </div>
                <button id="loginButton" type="submit">Login</button>
            </form>
            </> : <Logout />}
        </div>);
};

export default Login;