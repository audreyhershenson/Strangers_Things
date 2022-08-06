import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../api/index.js'
import { Header} from './'
import {Link, Routes, Route} from 'react-router-dom'


export const App = () => {
    const [posts, setPosts] = useState([])
    const [loggedIn, setLoggedIn] = useState(false);
    const [userToken, setToken] = useState("")

    useEffect(() => {
        const token = localStorage.getItem("token");
        getAllPosts().then(
            (response) => { setPosts(response.data.posts) }
        )
        if (token) {
            setToken(token); 
            setLoggedIn(true);
        }
    }, [])
    console.log(posts)
    return (
        <div>
            <Header />
            <div className = "posts">{
                posts && (posts.length > 0) ?
                    posts.map(({ _id, title, updatedAt, description, location, price, willDeliver, author}) => (
                        <div className = "indivpost" key={_id}> <h2>{title}</h2> <p>{updatedAt}</p><p>{description}</p><p>{location}</p><p>{price}</p> <p>{willDeliver}</p> <p>{author.username}</p></div>
                    )):
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