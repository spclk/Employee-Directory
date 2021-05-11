import React from "react";
import "./style.css";

function EmployeeListItem(props) {
  return (
    <div className="card mb-3" style={{ maxWidth: "700px", height: "180px"}}>
      <div className="row g-0">
        <div className="col-md-4 image">
          <img src={props.employee.picture.large} alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{props.employee.name.first} {props.employee.name.last}</h5>
            <p className="card-text"> Email: {props.employee.email}</p>
            <p className="card-text"> Office Phone: {props.employee.phone}</p>
            <p className="card-text"> Cell Phone: {props.employee.cell}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeListItem;
