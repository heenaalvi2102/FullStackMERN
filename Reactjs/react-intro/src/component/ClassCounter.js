import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(){
        super()
        this.state = {counter: 0}
    }
    componentDidMount(){
        console.log("component mounted")
    }
    shouldComponentUpdate(){
        return true
    }
    componentDidUpdate(){
        console.log("component did updated")


    }

    render() {
        return (
            <div>
              <h1>{this.state.counter}</h1>
              <button onClick={()=>{this.setState({counter: this .state+1})}}>Increment</button> 
              <button onClick={()=>{this.setState({counter: this .state-1})}}>Decrement</button> 
            </div>
        )
    }
}

//CRM 
//State and progi
