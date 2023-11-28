import React, { Component } from 'react'

//  refs can't be attached to functional components
class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    //   2nd method callback refs
      this.cbRef = null
      this.setCbRef = (el) => {
        this.cbRef = el
      }
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef, "i")
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/>
        <input type='text' ref={this.setCbRef}/>
        <button onClick={this.clickHandler}> Clcik me</button>
      </div>
    )
  }
}

export default RefsDemo