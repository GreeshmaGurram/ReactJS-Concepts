import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetch() {
    // const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // .then(resp => setPosts(resp.data))
        .then(resp => setPost(resp.data))
        .catch(err => console.log(err))
    }, [id])

  return (
    <div>
        {/* controlled input coz user needs to set the val and its listening to the changes */}
        <input type='text' value={id} onChange={e => setId(e.target.value)}/>
        {/* <ul>
            {
                posts.length ? posts.map(post => <li key={post.id}>{post.title}</li>) : null
            }
        </ul> */}
        {/* {
            post.length ? <h1>{post.title}</h1> : null
        } */}
        <h1>{post.title}</h1>
    </div>
  )
}

export default DataFetch