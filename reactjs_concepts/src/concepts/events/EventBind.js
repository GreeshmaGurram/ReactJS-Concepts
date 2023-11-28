import React, { Component } from 'react'



 class EvenBind extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
        message: 'Heelo'
       }
//  or 3rd way bind this keyword to this clickEventHandler in constructor
       this.clickEventHandler = this.clickEventHandler.bind(this)
     }
    

    //  this keyword has window scope in the event handler therefore resukts undefined
    // so we need to bind this keyword to this event handler i.e., clickEventHandler
     clickEventHandler(){
        this.setState({message: 'Good bye'})
     } //or clickHandler can be in arrow function

  render() {
    return (
      <div>{this.state.message}
        {/* <button onClick={this.clickEventHandler.bind(this)}>Clcik me</button> */}
        {/* or can just use arrow functions as event handlers */}
        {/* <button onClick={() => this.clickEventHandler()}>Clcik me</button> */}
        {/* or 3rd method */}
        <button onClick={this.clickEventHandler}>Clcik me</button>
      </div>
    )
  }
}

export default EvenBind;