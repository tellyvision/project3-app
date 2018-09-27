import React from "react";

import { Link } from "react-router-dom";
import $ from 'jquery';
import axios from 'axios';
import SocialChildren from "./SocialChildren";

function socialDogSearch(){
    axios.get('http://localhost:3001/api/search', {
        params:{
            column: 'social_dog',
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


const SocialDog = (props) => {
    return(
        <div className="input-group">

        <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
            <option selected disabled="disabled">Choose How Active You'd Like the Dog to Be With Other Dogs...</option>
            <option value="1">One (not very social)</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five (very social)</option>
        </select>
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={socialDogSearch}>Button</button>
        </div>

        </div>
    )
}

export default SocialDog;