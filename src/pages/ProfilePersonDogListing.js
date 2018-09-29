//listing of user's own dogs to change booking availability of each dog
import React, { Component } from "react";
import { Redirect, Link, Route } from "react-router-dom";

import $ from 'jquery';
import axios from 'axios';

import OwnerDogListingCard from "../components/Results/OwnerDogListingCard.js";
import ProfileDogOwner from "./ProfileDogOwner";

class ProfilePersonDogListing extends Component {

    constructor(props){
        super(props);

        this.state = {
          ownerDogList: null
        }

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount = () => {
        let self = this;
        axios.get('http://localhost:3001/api/ownerDogSearch', {
            params:{
                userID: this.props.user_id
            }
        })
        .then((res) => {
            console.log("res owner's dogs: ")
            console.log(res);
            self.setState({
                ownerDogList: res.data
            });
            console.log("new owner's doglist state: ");
            console.log(self.state.ownerDogList);
        })
        .catch(function(err) {
            console.log(err);
        });
    }

    render() {
        return(
            <div className="container">
                
                    {this.state.ownerDogList ? this.state.ownerDogList.map((dog) => (
                        // <Route exact path="/your-dog-listing/new-booking/*" render={(props) => 
                        //     <ProfileDogOwner {...props} loggedIn = {this.state.loggedIn} name={this.props.user_id} dog_id={dog.dog_id}/>} 
                        // />
                        <div className="row">
                            <div className="col-md-4">
                                <OwnerDogListingCard key={dog.dog_id} dog_id={dog.dog_id} owner_id={dog.owner_id} picture={dog.dog_url} name={dog.dog_name} />
                            </div>

                            <div className="col-md-4">
                                <Link to = "page that changes dog info">Change {dog.dog_name}'s Profile</Link>
                            </div>

                            <div className="col-md-4">
                                <Link to = "/your-dog-listing/new-booking/">Create New Availability for {dog.dog_name}</Link>
                            </div>
                        </div>
                    )) : false}
                        
                    <div>
                        
                    </div>
            </div>
        )
    }
}

export default ProfilePersonDogListing;