//import resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

import React from 'react';
import { NavLink, useNavigate } from "react-router-dom"

//create component///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const Header = ({ loggedIn }) => {

    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    function handleLogOut() {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        loggedIn = false;
        navigate("/");
    };

    //return header//////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////

    return (
        <div id="header">
            {(token) ? (
                <>
                    <header>
                        <div className="divTitle">
                            Strangers' Things
                        </div>
                        <br></br>
                        <div><NavLink to='/Post'>Create a post</NavLink>
                            <br></br>
                            <div><NavLink to="/Posts">See all posts</NavLink></div>
                            <div><NavLink to="/User">My Profile</NavLink></div>
                            <br></br>
                            <button onClick={handleLogOut}>
                                Logout
                            </button></div>
                    </header>
                </>
            ) : (
                <>
                    <header>
                        <div className="divTitle">
                            Strangers' Things
                        </div><br></br>
                        <div><NavLink to='/Login'>Log in </NavLink>
                            <br></br>
                            <NavLink to='/Register'>Register</NavLink></div>
                    </header>
                </>
            )}
        </div>)

};

//export resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export default Header;