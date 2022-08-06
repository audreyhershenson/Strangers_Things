//import resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from 'react-router-dom'
import "./style.css";

//create component///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const Post = ({
    username,
    password,
    token
}) => {

    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [postPrice, setPostPrice] = useState("");
    const [postLocation, setPostLocation] = useState("");

    //return post component//////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////

    return (
        <div>
            <form id="post">
                <label>Title:</label>
                <input
                    name="title"
                    type="text"
                    value={postTitle}
                    onChange={(event) => {
                        setPostTitle(event.target.value)
                    }}
                    required />
                <label>Body:</label>
                <input
                    name="description"
                    type="text"
                    value={postBody}
                    onChange={(event) => {
                        setPostBody(event.target.value)
                    }}
                    required />
                <label>Price:</label>
                <input
                    name="price"
                    type="text"
                    value={postPrice}
                    onChange={(event) => {
                        setPostPrice(event.target.value)
                    }}
                    required />
                <label>Location:</label>
                <input
                    name="location"
                    type="text"
                    value={postLocation}
                    default={"On request"}
                    onChange={(event) => {
                        setPostLocation(event.target.value)
                    }} />
            </form>
            <button type="submit">Post</button>
        </div>);
}
export default Post;