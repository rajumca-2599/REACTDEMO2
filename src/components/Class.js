import React, { Component } from 'react'

export class Class extends Component {
    constructor(){
        super()
        this.state={
            count:0,
        }
    }
    render() {
        return (
            <div>
               <p>count:{this.state.count}times</p>
               <button onClick={()=> this.setState({count:this.state.count+1})}>click</button>
            </div>
        )
    }
}

export default Class
