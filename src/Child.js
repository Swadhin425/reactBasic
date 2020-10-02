import React, { Component } from 'react'
import Child2 from './Child2'

export default class Child extends Component {

    constructor(){
        super();

        this.state={
         showChild2:false,
         text:"this is child two"
        }
    }

    handleClick = ()=>{
        this.setState({showChild2:!this.state.showChild2})
    }
    render() {
        return (
            <div >
                <h1>this is child component</h1>
                <button onClick={this.handleClick}>show child 2</button>
                {this.state.showChild2 ? <Child2 value={this.state.text} ></Child2>: ""}
                
            </div>
        )
    }
}
