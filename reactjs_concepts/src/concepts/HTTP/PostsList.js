import axios from 'axios'
import React, { Component } from 'react'

class PostsList extends Component {
    state = {posts:[], err: ''}

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( resp => this.setState({posts: resp.data}))
        .catch(err => this.setState({err: 'Error Found'}))
    }
  render() {
    const {posts, err} = this.state
    return (
      <div>PostsList
        {
            posts.length ? 
            posts.map(post => <div key={post.id}>{post.title}</div>) : null
        }
        {
            err ? <div>{err}</div> : null
        }
      </div>
    )
  }
}

export default PostsList