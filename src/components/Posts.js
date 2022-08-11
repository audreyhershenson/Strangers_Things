//import resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from 'react';
import { getAllPosts } from '../api/index.js';
import { Posts } from './index.js';
import "./style.css";

//create component///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        getAllPosts().then(

            (response) => {
                setPosts(response.data.posts)
            }
        )
    }, [])

    //return post component//////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////
    return (
        <div className="posts">{
            posts && (posts.length > 0) ?
                posts.map(({ _id, title, updatedAt, description, location, price, willDeliver, author }) => (
                    <div className="indivpost" key={_id}>
                        <h2>{title}</h2>
                        <p>{updatedAt}</p>
                        <p>{description}</p>
                        <p>{location}</p>
                        <p>{price}</p>
                        <p>{willDeliver}</p>
                        <p>{author.username}</p>

                    </div>
                )) :
                null
        }</div>
    )

}
//export resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export default PostsPage;