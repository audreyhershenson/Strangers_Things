//import resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from "react-router-dom"
import { Register, Login, Post } from "./"
import "./style.css";

//create component///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const Header = ({ loggedIn, username, setUsername, password, setPassword }) => {

    const token = localStorage.getItem("token");
    console.log(token)

    function handleLogOut() {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        loggedIn = false;
    };

    //return header//////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////

    return (
        <div id="header">
            {(token) ? (
                <>
                    <header>
                        <div>
                            Stranger's Things
                        </div>
                        <NavLink to='/Post'>Create a post</NavLink>
                        <button onClick={handleLogOut}>
                            Logout
                        </button>
                    </header>
                </>
            ) : (
                <>
                    <header>
                        <div>
                            Stranger's Things
                        </div>
                        <NavLink to='/Login'>Log in </NavLink>
                        <NavLink to='/Register'>Register</NavLink>
                    </header>
                </>
            )}
        </div>)

};

//export resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export default Header;