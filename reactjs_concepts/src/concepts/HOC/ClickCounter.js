import React, { Component } from 'react'
import UpdatedComp from './WithCounter'

class ClickCounter extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.incrementCounter}>{this.props.name} Clicked {this.props.count} times</button>
      </div>
    )
  }
}

export default UpdatedComp(ClickCounter, 2)