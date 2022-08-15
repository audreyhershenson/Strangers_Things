//import resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import { getUser, getMyPosts } from '../api/index.js';
import { DeletePost } from "./"

//create component///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const User = () => {

    const [user, setUser] = useState([]); //store API response in setUser
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const token = localStorage.getItem("token");
        async function getData() {
            const userData = await getUser(token);
            setUser(userData);

        }
        getData();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        getMyPosts(token).then(

            (response) => {
                setPosts(response.data.posts)
            }
        )
    }, [])

    console.log("user.messages", user.messages)
    return (
        <div className="vertical">
            <div className="divTitle">{user.username}'s profile</div>
            <br></br>
            <div>Your Messages</div>
            {/* <div>{user.messages.map((message) => {return <div className="box"><div>{message.content}</div><div>from: {message.fromUser.username}</div></div>})}</div> */}
            <br></br>
            <div>Your Posts</div>
            <div className="posts">{
                posts && (posts.length > 0) ?
                    posts.map(({ _id, title, updatedAt, description, location, price, willDeliver, author, active, messages }) => (
                        <div className="indivpost" key={_id} /*onSubmit={deletePost}*/>
                            <h2>{title}</h2>
                            <p>{updatedAt}</p>
                            <p>{description}</p>
                            <p>{location}</p>
                            <p>{price}</p>
                            <p>{willDeliver}</p>
                            <p>{author.username}</p>
                            <p>{active}</p>
                            <div>{messages.map((message) => { return <div className="box"><div>{message.content}</div><div>from: {message.fromUser.username}</div></div> })}</div>
                            <p></p>
                            <DeletePost />
                        </div>
                    )) : null}</div>
        </div>
    )
}

export default User;

//