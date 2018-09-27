import React from "react";

import { Link } from "react-router-dom";
import $ from 'jquery';
import axios from 'axios';

function socialPplSearch(){
    axios.get('http://localhost:3001/api/search', {
        params:{
            column: 'social_ppl',
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
                <button className="btn btn-outline-secondary" type="button" onClick={socialPplSearch}>Search</button>
            </div>
        </div>
    )
}

export default SocialPeople;