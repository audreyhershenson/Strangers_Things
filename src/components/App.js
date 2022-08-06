//import resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../api/index.js';
import { Header, Login, Register, Logout, Post } from './';
import { Link, Routes, Route } from 'react-router-dom';

//create app/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [posts, setPosts] = useState([])

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            setLoggedIn(true);
        }
    }, [])

    getAllPosts().then(
        (response) => { setPosts(response.data.posts) }
    )
    console.log(posts)

    //return app/////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////

    return (
        <div>
            <Header loggedIn={loggedIn} />
            <Routes>
                <Route path='/login' element={
                    <Login
                        setLoggedIn={setLoggedIn}
                        loggedIn={loggedIn}
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                    />}>
                </Route>
                <Route path='/Register' element={<Register />}></Route>
            </Routes>
            <div className="posts">{
                posts && (posts.length > 0) ?
                    posts.map(({ _id, title, updatedAt, description, location, price, willDeliver, author }) => (
                        <div className="indivpost" key={_id}> <h2>{title}</h2> <p>{updatedAt}</p><p>{description}</p><p>{location}</p><p>{price}</p> <p>{willDeliver}</p> <p>{author.username}</p></div>
                    )) :
                    null
            }</div>
        </div>
    )
}


// const posts = ({ posts }) => {
//     return (
//       <div className="all-posts">
//         {posts.map(({_id}) => (
//           <div key={ _id } className="post">

//           </div>
//         ))}
//       </div>
//     );
//   }

export default App;