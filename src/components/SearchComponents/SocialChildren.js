import React from "react";

const SocialChildren = (props) => {
    return(
        <div className="input-group">
            <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected disabled="disabled"> Choose How Social The Dog Will Be With Children...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Search</button>
            </div>
        </div>
    )
}

export default SocialChildren;