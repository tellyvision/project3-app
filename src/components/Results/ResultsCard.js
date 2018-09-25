import React from "react";
import { Link } from "react-router-dom";

const ResultsCard = (props) => {
    return(
        <div className="media dogsCard" data-name={props.name} key={props.dog_id}>
            <Link to={"/dog-info/"+props.dog_id}>
                <img className="align-self-center mr-3" src={props.picture} alt={props.name} />
                <div class="media-body">
                    <h5 class="mt-0">{props.name}</h5>
                    <p>Breed: {props.breed}</p>
                    <p>Size Range: {props.size}</p>
                </div>
            </Link>
        </div>
    )
};

export default ResultsCard;

//api/dog-info/:id ->
// dog-info/:id