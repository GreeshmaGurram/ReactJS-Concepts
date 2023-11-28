import React, {Component} from 'react';

class ClassState extends Component{
    state = { message : 'Welcome Visitor'}

    changeMessage = () =>{
        this.setState({message: 'Thank you for subscribing'})
    } // use only arrow functions to define methods and not function declerations
    // coz the scope of this for function decelration is window while arrow function is this class

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>Subscribe</button>
            </div>
        )
    }
}

export default ClassState;
