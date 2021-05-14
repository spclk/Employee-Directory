import React from "react";

function Navbar(props) {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <h4 className="navbar-brand">Employee Directory</h4>
            <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
            name = "search"
            onChange={props.handleInputChange}/>
            <button className="btn btn-warning" type="submit" onClick={props.handleFormSubmit}>Search</button>
            </form>
          </div>
        </nav>
      </div>
      );
}

export default Navbar;