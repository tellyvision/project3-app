import React from "react";

const Activeness = (props) => {
    return(
        <div className="input-group">
            <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected>Choose Activeness Level...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
            </select>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Search</button>
            </div>
        </div>
    )
}
//1-5
export default Activeness;