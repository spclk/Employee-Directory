import React from "react";

function EmployeeListItem(props) {
  return (
    <div className="card mb-3" style={{ maxWidth: "800px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.employee.picture.thumbnail} alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.employee.name.first} {props.employee.name.last}</h5>
            <p className="card-text"> Email: {props.employee.email}</p>
            <p className="card-text"> ID: {props.employee.id.value}</p>
            <p className="card-text"> phone: {props.employee.phone}</p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeListItem;
