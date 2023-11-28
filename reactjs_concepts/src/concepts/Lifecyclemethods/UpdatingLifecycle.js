import React, { Component } from 'react';

class UpdatingLifecycle extends Component {

    static getDerivedStateFromProps(props, state){
        console.log("get derived state")
        return null
    }

    shouldComponentUpdate(){
        console.log("should component update")
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log("snap before update")
        return null
    }

    componentDidUpdate(){
        console.log("component Did update")
    }

  render() {
    console.log("render")
    return (
      <div>UpdatingLifecycle</div>
    )
  }
}
// after rendering of child component, all the lifecycle methods of child are executed
// and after all methods are rendered only, parent componentDidMount() method is called
export default UpdatingLifecycle