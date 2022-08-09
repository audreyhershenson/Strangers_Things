//import resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createPost } from '../api';
import "./style.css";

//create component///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const Post = ({
    username,
    password,
    token
}) => {

    const navigate = useNavigate();
    const authToken = localStorage.getItem("token");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");

    async function handlePost(event) {
        event.preventDefault();
        try {
            await createPost(setTitle, setDescription, setPrice, setLocation, authToken);
            navigate("/");
        } catch {
            console.error;
        }
    }

    //return post component//////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////

    return (
        <div>
            <form onSubmit={handlePost}>
                <label>Title:</label>
                <input
                    name="title"
                    type="text"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value)
                    }}
                    required />
                <label>Body:</label>
                <input
                    name="description"
                    type="text"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value)
                    }}
                    required />
                <label>Price:</label>
                <input
                    name="price"
                    type="text"
                    value={price}
                    onChange={(event) => {
                        setPrice(event.target.value)
                    }}
                    required />
                <label>Location:</label>
                <input
                    name="location"
                    type="text"
                    value={location}
                    default={"On request"}
                    onChange={(event) => {
                        setLocation(event.target.value)
                    }} />
                <button type="submit">Post</button>
            </form>
        </div>);
}

//export resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export default Post;