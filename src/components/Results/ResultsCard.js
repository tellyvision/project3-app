import React from "react";

const ResultsCard = (props) => {
    return(
        <div className="resultsCard" data-name={props.name}>
            <img src={props.source} key={props.id} alt={props.name} height="300px" width="200px" />
        </div>
    )
};

export default ResultsCard;