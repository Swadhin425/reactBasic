import React from "react";

class EmployeeState  extends React.Component{
    constructor() {
        super();
        console.log("constructor");
      }
      componentDidMount() {
        console.log("componentDidMount");
      }
    
      componentWillMount() {
        console.log("componentWillMount");
      }
      componentDidUpdate() {
        console.log("componentDidUpdate");
      }
      componentWillUnmount() {
        console.log("componentWillUnmount");
      }
    render(){
        console.log("render");
        return (
            <div >
             <h1>this is class component</h1>
            </div>
          );
    }
  
};

export default EmployeeState;
