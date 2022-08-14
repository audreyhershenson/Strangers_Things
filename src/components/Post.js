//import resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createPost } from '../api';
import "./style.css";

//create component///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

const Post = ({}) => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");

    async function handlePost(event) {
        event.preventDefault();
        try {
            const post = {
                title: title,
                description: description,
                price: price,
                location: location
            }
            // await createPost(setTitle, setDescription, setPrice, setLocation, authToken);
            const authToken = localStorage.getItem("token");
            const response = await createPost(post, authToken)
            navigate("/User")
        } catch {
            console.error;
        }
    }

    //return post component//////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////

    return (
        <div>
            <form onSubmit={handlePost} className="postForm">
                <div className="postBox">
                    <div className="centerTitle">
                        Create a post
                    </div>
                    <br></br>
                    <label>Title:</label><br></br>
                    <input
                        name="title"
                        type="text"
                        size={50}
                        defaultValue={title}
                        onChange={(event) => {
                            setTitle(event.target.value)
                        }}
                        required />
                    <br></br>
                    <label>Body:</label><br></br>
                    <input className="postBodyInput"
                        name="description"
                        type="text"
                        size={50}
                        defaultValue={description}
                        onChange={(event) => {
                            setDescription(event.target.value)
                        }}
                        required />
                    <br></br>
                    <label>Price:</label><br></br>
                    <input
                        name="price"
                        type="text"
                        size={50}
                        defaultValue={price}
                        onChange={(event) => {
                            setPrice(event.target.value)
                        }
                        }
                        required />
                    <br></br>
                    <label>Location:</label><br></br>
                    <input
                        name="location"
                        type="text"
                        size={50}
                        defaultValue={location}
                        default={"On request"}
                        onChange={(event) => {
                            setLocation(event.target.value)
                        }} />
                    <br></br><br></br>
                    <div className="center"><button type="submit">Post</button></div>
                </div>
            </form>
        </div>);
}

//export resoruces///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

export default Post;