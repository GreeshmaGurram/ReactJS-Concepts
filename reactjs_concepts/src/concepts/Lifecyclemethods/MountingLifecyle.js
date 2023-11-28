import React, { Component } from 'react';

class MountingLifecyle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'G'
      }
      console.log("Constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("get derived state")
        return null
    }

    componentDidMount(){
        console.log("component Did mount")
    }

  render() {
    console.log("render")
    return (
      <div>MountingLifecyle</div>
    )
  }
}
// after rendering of child component, all the lifecycle methods of child are executed
// and after all methods are rendered only, parent componentDidMount() method is called
export default MountingLifecyle