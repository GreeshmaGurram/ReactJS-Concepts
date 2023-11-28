import React, { Component } from 'react'

class User extends Component {
    state = {count : 0} 

    incrementCounter = () => {
        this.setState(prevState => {return {count : prevState.count + 1}})
    }
  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCounter)}
        {/* or */}
        {/* {this.props.children(this.state.count, this.incrementCounter)} */}
      </div>
    )
  }
}

export default User