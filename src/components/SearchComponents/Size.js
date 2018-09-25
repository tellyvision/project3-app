import React from "react";

const Size = (props) => {
    return(
        <div className="input-group">

        <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
            <option selected disabled="disabled">Choose the Size of the Dog...</option>
            <option value="1">Small size (0-25 kg)</option>
            <option value="2">Medium size(26-54 pbs)</option>
            <option value="3">Large size (55+ pbs)</option>
        </select>
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Button</button>
        </div>

        </div>
    )
}

export default Size;