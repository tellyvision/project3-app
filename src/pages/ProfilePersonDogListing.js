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

        // this.state = {
        //   ownerDogList: null
        // }

        // this.componentWillMount = this.componentWillMount.bind(this);
    }

    // componentWillMount = () => {
    //     let self = this;
    //     axios.get('http://localhost:3001/api/ownerDogSearch', {
    //         params:{
    //             userID: this.props.user_id
    //         }
    //     })
    //     .then((res) => {
    //         console.log("res owner's dogs: ")
    //         console.log(res);
    //         self.setState({
    //             ownerDogList: res.data
    //         });
    //         console.log("new owner's doglist state: ");
    //         console.log(self.state.ownerDogList);
    //     })
    //     .catch(function(err) {
    //         console.log(err);
    //     });
    // }

    render() {
        return(
            <div className="container">
                
                    {this.props.user_dog_list.map((dog) => (
                        // <Route exact path="/your-dog-listing/new-booking/*" render={(props) => 
                        //     <ProfileDogOwner {...props} loggedIn = {this.state.loggedIn} name={this.props.user_id} dog_id={dog.dog_id}/>} 
                        // />
                        <div className="row">
                            <div className="col-md-4">
                                <OwnerDogListingCard key={dog.dog_id} dog_id={dog.dog_id} owner_id={dog.owner_id} picture={dog.dog_url} name={dog.name} />
                            </div>

                            <div className="col-md-4">
                            <Link to={{ pathname: `/dog-info/${dog.dog_id}`, 
                                        state: { 
                                            picture: dog.dog_url, 
                                            dog_name: dog.dog_name, 
                                            size: dog.dog_size, 
                                            breed: dog.dog_breed, 
                                            activeness: dog.activeness, 
                                            microchip: dog.microchip, 
                                            social_children: dog.socild_children, 
                                            social_ppl: dog.social_ppl, 
                                            social_dog: dog.social_dog, 
                                            dog_id: dog.dog_id,
                                        }
                                    }}>`Change {dog.dog_name}'s Profile`</Link>
                            </div>

                            <div className="col-md-4">
                                <Link to = "/your-dog-listing/new-booking/">Create New Availability for {dog.dog_id}</Link>
                            </div>
                        </div>
                    ))}
                        
                    <div>
                        
                    </div>
            </div>
        )
    }
}

export default ProfilePersonDogListing;