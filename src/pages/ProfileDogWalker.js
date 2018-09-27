//allows user to book dog to walk
import React, { Component } from "react";
import { Link } from "react-router-dom";

// dog_name: "", 
// size: "", 
// breed: "", 
// activeness: "", 
// microchip: "", 
// social_children: "", 
// social_ppl: "", 
// social_dog: ""

class DogWalkerBook extends Component {
    constructor(props) {
		super(props);	
	}

    render() {
        return(
            <div className="media dogsCard" data-name={this.props.dog_name} key={this.props.dog_id}>
                <img className="align-self-center mr-3" src={this.props.picture} alt={this.props.name} />
                <div className="media-body">
                    <h5 className="mt-0">{this.props.name}</h5>
                    <p>Breed: {this.props.breed}</p>
                    <p>Size Range: {this.props.size}</p>
                </div>
            </div>
        )
    }
}

export default DogWalkerBook;