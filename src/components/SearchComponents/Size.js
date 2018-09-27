import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import $ from 'jquery';
import axios from 'axios';


class Size extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          dataFromSearchComp: null,
          redirectTo: null
        }

        this.sizeSearch = this.sizeSearch.bind(this);
    }

    sizeSearch() {
        axios.get('http://localhost:3001/api/search', {
            params:{
                column: 'size',
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
                        <option selected disabled="disabled">Choose the Size of the Dog...</option>
                        <option value="1">Small size (0-25 lbs)</option>
                        <option value="2">Medium size(26-54 lbs)</option>
                        <option value="3">Large size (55+ lbs)</option>
                    </select>
                    <div className="input-group-append">
                        <Route render={({ history }) => (
                            <button className="btn btn-outline-secondary" type="button" onClick={this.sizeSearch}>Search</button>
                        )}/>
                    </div>

                </div>
            )
        }
    }
}

export default Size;