//import resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from "react-router-dom"
import { Register, Login, Logout } from "./"

//create component///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const Header = ({
    loggedIn,
    setCurrentUser
}) => {

    const token = localStorage.getItem("token");
    console.log(token)

//return header//////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

    return (
        <div id="header">
            <div>
                Stranger's Things
            </div>
            {loggedIn ? (
                <>
                    <header>
                        <Logout />

                    </header>
                </>
            ) : (
                <>
                    <header>
                        <Routes>
                            <Route path='/Login' element={<Login />}></Route>
                            <Route path='/Register' element={<Register />}></Route>
                        </Routes>
                        <NavLink to='/Login'>Log In </NavLink>
                        <NavLink to='/Register'>Register</NavLink>
                    </header>
                </>
            )}
        </div>)

};

//export resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export default Header;