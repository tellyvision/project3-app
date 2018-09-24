import React from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
import axios from 'axios';

function activenessSearch(){
    axios.get('/api/search', {
        params:{
            column: 'activeness',
            columnVar: $('#inputGroupSelect04').value
        }
    })
    .then(function(res){
        console.log(res);
    })
    .catch(function(err) {
        console.log(err);
    });
}

const Activeness = (props) => {
    return(
        <div className="input-group">
        <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
            <option selected>Choose Activeness Level...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={activenessSearch()}>Search</button>
        </div>
        </div>
    )
}

export default Activeness;