import React, { useState, useEffect } from "react";
import { getUser } from '../api/index.js';

const User = () => { 

    const [user, setUser] = useState(""); //store API response in setUser
    const token = localStorage.getItem("token");

    
    const response = getUser(user)
    console.log("current user:", response)
    console.log("current username:", response.data)
    
    useEffect(() => {
        setUser(token)
    }, [])
//console.log user to get info to modify
    return (
        <><div>Current User: {token}</div><br></br>
        <div>
            This is the user's page.
        </div></>
    )
}

export default User;

//