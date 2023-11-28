import React, { Component } from 'react'
import ChidComponent from './ChidComponent'

export class ParentComponent extends Component {

    state = { parentName: 'Parent'}

    greetParent = (childText) => {
        alert(`Hello ${this.state.parentName} ${childText}`)
    }
  render() {
    return (
      <div>
        <ChidComponent greetParent={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent