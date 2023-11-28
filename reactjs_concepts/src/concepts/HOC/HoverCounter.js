import React, { Component } from 'react'
import UpdatedComp from './WithCounter'

class HoverCounter extends Component {
    

  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.incrementCounter}>{this.props.name} Hovered {this.props.count} times</h2>
      </div>
    )
  }
}

export default UpdatedComp(HoverCounter,5)