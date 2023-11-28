import React, { Component } from 'react'

export class OnClickEvent extends Component {
    clickEventHandler = () => {
        console.log("button Clciked")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickEventHandler}>Click me</button>
        {/* for functional components */}
        {/* <button onClick={clickEventHandler}>Click me</button>  */}
      </div>
    )
  }
}

export default OnClickEvent