import React from "react";
import "./style.css";


function Navbar(props) {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Employee Directory</a>
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