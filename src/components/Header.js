import React, { useState, useEffect } from 'react';

import {
    storeCurrentUser,
    clearCurrentUser
} from '../auth';

const Header = ({
    currentUser,
    setCurrentUser,
    userList
}) => {
    return (
        <header>
            <h1>Strangers' Things</h1>
            <form  id = "register" >
                <div className="nameEntry">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username"  defaultValue = "User name" required />
                </div>
                <div className="passwordEntry">
                    <label for="password">Password:</label>
                    <input type="text" id="password" name="password" defaultValue = "Password" required />
                </div>
                <div className="passwordConfirm">
                    <label for="passwordC">Confirm password:</label>
                    <input type="text" id="passwordC" name="passwordC" defaultValue = "Confirm password" required />
                </div>
                <button id = "registerButton">Register</button>
                <button id = "loginButton">Login</button>
            </form>

        </header>
    );
}

export default Header;