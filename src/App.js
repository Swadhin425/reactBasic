import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Employee from "./Components/Employee";
import EmployeeState from "./Components/EmployeeState";

class App extends Component {
  

  state = {
    employees: [
      { name: "swadhin", salary: "500" },
      { name: "john", salary: "700" },
      { name: "max", salary: "9000" },
    ],
    toggle:true
  };
  changeNameHandler = (newName) => {
    this.setState({
      employees: [
        { name: newName, salary: "500" },
        { name: "john", salary: "700" },
        { name: "max", salary: "600" },
      ],
    });
  };

  switchNameHandler = (event) => {
    this.setState({
      employees: [
        { name: "swadhin", salary: "500" },
        { name: event.target.value, salary: "700" },
        { name: "max", salary: "600" },
      ],
    });
  };

  toogleHandler = () =>{
    
    this.setState({toggle:!this.state.toggle})
    console.log(this.state)
  }

  render() {
   
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      color: "#fff",
    };
    return (
      <div className="App">
        <button
          style={style}
          onClick={this.changeNameHandler.bind(this, "Bhupesh")}
        >
          Change Name
        </button>
        <button
          style={style}
          onClick={this.toogleHandler}
        >
          Toogle
        </button>
        {
          this.state.toggle?<EmployeeState></EmployeeState> :""
        }
       
       <Employee
          name={this.state.employees[0].name}
          salary={this.state.employees[0].salary}
        ></Employee>
      </div>
    );
  }
}

export default App;
