import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../api/index.js'



export const App = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        getAllPosts().then(
            (response) => { setPosts(response.data.posts) }
        )
    }, [])
    console.log(posts)
    return (
        <div>
            <h2>Posts</h2>
            {
                posts && (posts.length > 0) ?
                    posts.map(({ _id, title, createdAt, updatedAt, description, location, price, willDeliver, author}) => (
                        <div key={_id}> <h2>{title}</h2> <p>{createdAt}</p><p>{updatedAt}</p><p>{description}</p><p>{location}</p><p>{price}</p> <p>{willDeliver}</p> <p>{author.username}</p></div>
                    )):
                    null
            }
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
