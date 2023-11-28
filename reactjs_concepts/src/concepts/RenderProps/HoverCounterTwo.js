import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
    
  render() {
    return (
        <div>
        <h2 onMouseOver={this.props.incrementCounter}>Hovered {this.props.count} times</h2>
      </div>
    )
  }
}

export default HoverCounterTwo