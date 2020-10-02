import React from "react";
import './Employee.css'
const employee = (props) => {
  return (
    <div className='Employee'>
      <p onClick={props.click}>
        I am {props.name} my salary is {props.salary}
      </p>
      <p>{props.children}</p>
      <input type="text" value={props.name}  onChange={props.change}></input>
    </div>
  );
};

export default employee;
