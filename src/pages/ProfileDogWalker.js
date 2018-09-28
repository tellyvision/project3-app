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
        return( //compiles with this.props but all examples do not include this
            <div className="media dogsCard" data-name={this.props.location.state.dog_name} key={this.props.location.state.dog_id}>
                <img className="align-self-center mr-3" src={this.props.location.state.picture} alt={this.props.location.state.name} />
                <div className="media-body">
                    <h5 className="mt-0">{this.props.location.state.name}</h5>
                    <p>Breed: {this.props.location.state.breed}</p>
                    <p>Size Range: {this.props.location.state.size}</p>
                    <p>Activeness: {this.props.location.state.activeness}</p>
                    <p>Sociability with Children: {this.props.location.state.social_children}</p>
                    <p>Sociability with People: {this.props.location.state.social_ppl}</p>
                    <p>Sociability with Other Dogs: {this.props.location.state.social_dog}</p>
                    <button
                        className="btn btn-secondary col-1 col-mr-auto"
                        onClick={this.bookDogModal}
                        type="button">Book
                    </button>
                    <button
                        className="btn btn-danger col-1 col-mr-auto"
                        onClick={this.props.history.goBack}
                        type="button">Back
                    </button>

                    

                </div>
                <div className={this.state.showModal ? "modal fade show" : "modal fade"} tabindex="-1" role="dialog" styles={this.state.showModal ? "display: none" : "display: block" }>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Save changes</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        )
    }
}

// const container = document.createElement("div");
// document.body.appendChild(container);
// ReactDOM.render(<DogWalkerBook />, container);

export default DogWalkerBook;