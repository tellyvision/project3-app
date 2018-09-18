import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
    
    //todo: make links into <Links>
    <nav className="navbar navbar-light" containerStyle="background-color: #e3f2fd;">
    <Link to ="/" className="navbar-brand">Dogs</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><Link to ="/">Home</Link></li>
            <li className="nav-item"><Link to ="/search">Search</Link></li>
            <li className="nav-item"><Link to ="/login">Log In</Link></li>
        </ul>
    </nav>
)

export default Navbar;