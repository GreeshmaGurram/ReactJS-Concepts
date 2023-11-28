import axios from 'axios'
import React, { Component } from 'react'

class PostAPIEx extends Component {
    state = {userId: '', title: '', body: ''}

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type='text' name='userId' value={this.state.userId} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type='text' name='title' value={this.state.title} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type='text' name='body' value={this.state.body} onChange={this.changeHandler}/>
            </div>  
            <button type='submit'>Submit</button>      
        </form>
      </div>
    )
  }
}

export default PostAPIEx