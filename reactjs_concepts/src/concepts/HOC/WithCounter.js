import React from "react";

const UpdatedComp = ( OrgComp, incNum ) => {
    class NewComp extends React.Component{
        state = {count : 0} 

    incrementCounter = () => {
        this.setState(prevState => {return {count : prevState.count + incNum}})
    }
        render(){
            return <OrgComp name="G" count={this.state.count} incrementCounter={this.incrementCounter} {...this.props}/>
        }
    }
    return NewComp
}


// naming convention: UpdatedComp = withCounter, NewComp = WithCounter, OrgComp = Wrapped Comp
export default UpdatedComp;