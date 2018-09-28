import React from "react";
import { Link } from "react-router-dom";

import $ from 'jquery';
import axios from 'axios';

const OwnerDogListingCard = (props) => {
   return(
       <div className="media ownerDogsCard" data-name={props.name} key={props.dog_id}>
            <img className="align-self-center xs-3" src={props.picture} alt={props.name} />
            <h5 className="mt-0">{props.name}</h5>
       </div>
   )
};

export default OwnerDogListingCard;