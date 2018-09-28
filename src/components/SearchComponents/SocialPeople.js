import React, { Component } from "react";

import { Route, Redirect } from "react-router-dom";
import $ from 'jquery';
import axios from 'axios';

class SocialPeople extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          dataFromSearchComp: null,
          redirectTo: null
        }

        this.socialPplSearch = this.socialPplSearch.bind(this);
    }

    socialPplSearch(){
        axios.get('http://localhost:3001/api/search', {
            params:{
                column: 'social_ppl',
                columnVar: $('#inputGroupSelect04').val()
            }
        })
        .then((res)=>{  
            
            this.props.passDataToSearch(res.data);
            this.setState({
                dataFromSearchComp: res.data
            })
            this.setState({
                redirectTo: '/search/results'
            })
        })
            
        .catch(function(err) {
            console.log(err);
        })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } 
        else {
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
                        <Route render={({ history }) => (
                            <button className="btn btn-outline-secondary" type="button" onClick={this.socialPplSearch}>Search</button>
                        )}/>
                    </div>
                </div>
            )
        }
    }
}

export default SocialPeople;