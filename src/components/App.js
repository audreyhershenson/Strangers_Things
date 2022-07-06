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
                    posts.map(({ _id, title }) => (
                        <div key={_id}> <p>{title}</p> </div>
                    ))
                    :
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
