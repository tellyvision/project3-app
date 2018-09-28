//allows user to book dog to walk
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";

import DogBookingModal from "../components/Modal/DogBookingModal";

class DogWalkerBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            redirectTo: null
        }	
        this.bookDogModal = this.bookDogModal.bind(this);
    }

    
    componentWillMount() {
        //get request to bookinfo table to get available dates, store to state
        //add modal info from state info
    }

    bookDogModal() {
        this.setState({ showModal: true });
        //modal of available dates.
        //onclick, PUT request to db, add borrower id (from state as props) to entry.
    }




    render() {
        return(
            <div className="media dogsCard" data-name={this.props.dog_name} key={this.props.dog_id}>
                <img className="align-self-center mr-3" src={this.props.picture} alt={this.props.name} />
                <div className="media-body">
                    <h5 className="mt-0">{this.props.name}</h5>
                    <p>Breed: {this.props.breed}</p>
                    <p>Size Range: {this.props.size}</p>
                    <p>Activeness: {this.props.activeness}</p>
                    <p>Sociability with Children: {this.props.social_children}</p>
                    <p>Sociability with People: {this.props.social_ppl}</p>
                    <p>Sociability with Other Dogs: {this.props.social_dog}</p>
                    <button
                        className="btn btn-secondary col-1 col-mr-auto"
                        onClick={this.bookDogModal}
                        type="button">Book
                    </button>
                    <button
                        className="btn btn-danger col-1 col-mr-auto"
                        onClick={this.handleSubmit}
                        type="button">Back
                    </button>

                    <DogBookingModal show={this.state.showModal} handleClose={this.hideModal}>
                        <p>Modal</p>
                        <p>Data</p>
                    </DogBookingModal>

                </div>
            </div>
        )
    }
}

// const container = document.createElement("div");
// document.body.appendChild(container);
// ReactDOM.render(<DogWalkerBook />, container);

export default DogWalkerBook;