//import resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../api/index.js';
import { Header, Login, Register, Post, PostsPage, User } from './';
import { Link, Routes, Route } from 'react-router-dom';
import "./style.css";

//create app/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [posts, setPosts] = useState([]);
    // const [searchTerm, setSearchTerm] = useState([]);

    // // function postMatches(post, text) {
    // //     (post.includes(searchTerm) || (text.includes(searchTerm))) ? 
    // //     return true;
    // //     :
    // //     return false;
    // // }

    // const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
    // const postsToDisplay = searchTerm.length ? filteredPosts : posts;

    const token = localStorage.getItem("token");


    useEffect(() => {
        if (token) {
            setLoggedIn(true);
        }
    }, [])


    //return app/////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////

    return (
        <div>
            <Header username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
            <div className="routeBox">
                <Routes>
                    <Route path="/" element={null} />
                    <Route path='/Login' element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} />}></Route>
                    <Route path='/Register' element={<Register username={username} setUsername={setUsername} password={password} setPassword={setPassword} />}></Route>
                    <Route path='/Posts' element={<PostsPage />}></Route>
                    <Route path="/Post" element={<Post token={token} />}></Route>
                    <Route path="/User" element={<User />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default App;