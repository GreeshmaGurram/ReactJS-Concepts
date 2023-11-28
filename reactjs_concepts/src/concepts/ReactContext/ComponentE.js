import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
  // 2nd way
  // static contextType = UserContext
  render() {
    return (
      <ComponentF/>
      // 2nd way
      // <div> Component E context {this.context} <ComponentF/> </div>
    )
  }
}
// 2nd way or add on top
// ComponentE.contextType = UserContext

export default ComponentE