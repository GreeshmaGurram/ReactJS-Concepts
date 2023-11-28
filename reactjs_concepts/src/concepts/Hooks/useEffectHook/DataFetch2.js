import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetch2() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp => setPost(resp.data))
        .catch(err => console.log(err))
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

  return (
    <div>
        {/* controlled input coz user needs to set the val and its listening to the changes */}
        <input type='text' value={id} onChange={e => setId(e.target.value)}/>
        <button type='button' onClick={handleClick}>Fetch post</button>
        {/* {
            post.length ? <h1>{post.title}</h1> : null
        } */}
        <h1>{post.title}</h1>
    </div>
  )
}

export default DataFetch2;