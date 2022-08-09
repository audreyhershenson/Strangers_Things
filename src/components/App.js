//import resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../api/index.js';
import { Header, Login, Register, Post } from './';
import { Link, Routes, Route } from 'react-router-dom';
import "./style.css";

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

    useEffect(() => {
        
        getAllPosts().then(
            (response) => { setPosts(response.data.posts) }
        )
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
                    <Route path="/Post" element={<Post token={token}/>}></Route>
                </Routes>
            </div>
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