import React from "react";
import "./style.css";

function SearchBar() {
  return (
    <>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label for="seachBar" className="col-form-label">
            Search Employee
          </label>
        </div>
        <div className="col-auto">
          <input
            type="input"
            id="seachBar"
            className="form-control"
          />
        </div>
        <button type="button" className="btn btn-secondary">Search</button>
      </div>
    </>
  );
}

export default SearchBar;
