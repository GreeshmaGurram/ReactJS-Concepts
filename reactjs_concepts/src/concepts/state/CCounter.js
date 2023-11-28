import React, { Component } from 'react'

class CCounter extends Component {

    state = { count: 0 }

    handleIncrement = () => {
        this.setState( prevState =>  { 
            return {count: prevState.count + 1}})
        console.log(this.state.count)  //calls to setState is async 

        // prevState is object which has all state variables
        // or
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {console.log('callback val', this.state.count)}) code that haas to be
        // executed after state  is set can be given in callback function .. shown as callbal val in above code
    }

    componentDidUpdate(prevState){
      if(prevState.count !== this.state.count){
        document.title = `${this.state.count} times`
      }
    }

  render() {
    // const {count} = this.state
    return (
      <div>
        <h1>CCounter {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        {/* event handler should be a function and not a function call coz the rendering of the component will get into a loop i.e.' 
        will be executed infinte times */}
      </div>
    )
  }
}

export default CCounter