//import resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import { getUser } from '../api/index.js';

//create component///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const User = () => { 

    const [user, setUser] = useState([]); //store API response in setUser
    const token = localStorage.getItem("token");

    
    useEffect(() => {
        async function getData() {
            const userData = await getUser(token);
            setUser(userData);
            console.log("user:", user)
        }
        getData();
    }, []);


    //console.log user to get info to modify
    return (
        <>
        <div>{user.username}'s profile</div></>
    )
}

export default User;

//