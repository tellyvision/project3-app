import React from "react";
import { Link } from "react-router-dom";

const SocialPeople = (props) => {
    return(
        <div className="input-group">
            <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected disabled="disabled">Choose How Active the Dog Should Be with Other People...</option>
                <option value="1">One (not very social)</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five (very social)</option>
            </select>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Button</button>
            </div>
        </div>
    )
}

export default SocialPeople;