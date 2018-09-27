import React from "react";

import { Link } from "react-router-dom";
import $ from 'jquery';
import axios from 'axios';

function sizeSearch(){
    axios.get('http://localhost:3001/api/search', {
        params:{
            column: 'size',
            columnVar: $('#inputGroupSelect04').val()
        }
    })
    .then(function(res){
        console.log("res: ")
        console.log(res);
    })
    .catch(function(err) {
        console.log(err);
    });
}

const Size = (props) => {
    return(
        <div className="input-group">

        <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
            <option selected disabled="disabled">Choose the Size of the Dog...</option>
            <option value="1">Small size (0-25 lbs)</option>
            <option value="2">Medium size(26-54 lbs)</option>
            <option value="3">Large size (55+ lbs)</option>
        </select>
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={sizeSearch}>Search</button>
        </div>

        </div>
    )
}

export default Size;