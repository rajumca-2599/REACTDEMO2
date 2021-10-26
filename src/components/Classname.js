import React, { Component } from 'react'

export class Classname extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Varun"
        }
    }
    
    render() {
        return (
            <div>
                <p>your name:{this.state.name}</p>
                <button onClick={()=> this.setState({name:"Varun Raju"})}>click</button>
            </div>
        )
    }
}

export default Classname
