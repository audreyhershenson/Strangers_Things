import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from 'react-router-dom'

const Post = ({ loggedIn }) => {
    return (
        <div>
            { loggedIn ? (<div>
                <form>
                    <label>Title:</label>
                    <input type="text" id="inputTitle" name="title"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value)
                    }}
                    required />
                    <label>Body:</label>
                    <input type="text" id="inputDescription" name="description"
                    value={description}
                    onChange={(event) => {
                        setBody(event.target.value)
                    }}
                    required />
                    <label>Price:</label>
                    <input type="text" id="inputPrice" name="price"
                    value={price}
                    onChange={(event) => {
                        setBody(event.target.value)
                    }}
                    required />
                    <label>Location:</label>
                    <input type="text" id="inputLocation" name="location"
                    value={location}
                    default={"On request"}
                    onChange={(event) => {
                        setBody(event.target.value)
                    }} />
                </form>
                <button type="submit">Post</button>
                </div>) : (<div></div>) }
        </div>

    )
}