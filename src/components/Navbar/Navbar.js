import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
    
    //todo: make links into <Links>
    <nav className="navbar navbar-light" style="background-color: #e3f2fd;">
    <a className="navbar-brand" href="#">Dogs</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">Home</li>
            <li className="nav-item">Search</li>
            <li className="nav-item">Log-in</li>
        </ul>
    </nav>
)

export default Navbar;