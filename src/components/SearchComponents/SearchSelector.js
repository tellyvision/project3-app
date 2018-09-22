import React from "react";
import { Link } from "react-router-dom";

function searchDropdown() {
    document.getElementById("searchDropdown").classList.toggle("show");
    document.getElementById("criteriaSelector").classList.toggle("show");
}

const SearchSelector = (props) => {
    return(
        <div className="input-group mb-3">
            <div className="dropdown" id="searchDropdown">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={searchDropdown}>Search Criteria</button>
                <div className="dropdown-menu" id="criteriaSelector">
                    <Link className="dropdown-item" to="/Home">Activeness</Link>
                    <Link className="dropdown-item" to="/Home">Breed</Link>
                    <Link className="dropdown-item" to="/Home">Size</Link>
                    <div role="separator" className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/Home">Socialability with Children</Link>
                    <Link className="dropdown-item" to="/Home">Socialability with Other Dogs</Link>
                    <Link className="dropdown-item" to="/Home">Socialability with Other People</Link>
                </div>
            </div>
        </div>
    )
}

export default SearchSelector