import React, { Component } from "react";
// import createHistory from "history/createBrowserHistory";

import { Route, Redirect } from "react-router-dom";
import $ from 'jquery';
import axios from 'axios';

// const history = createHistory();



class Activeness extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          dataFromSearchComp: null,
          redirectTo: null
        }

        this.activenessSearch = this.activenessSearch.bind(this);
    }

    activenessSearch(){

        axios.get('http://localhost:3001/api/search', {
            params:{
                column: 'activeness',
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
            // history.push('/search/results')
    }

    // componentDidMount() {
    //     this.setState({
    //         redirectTo: ''
    //     })
    // }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
          } 
          
        else {
            return(
                <div className="input-group">
                    <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                        <option selected disabled="disabled">Choose Activeness Level...</option>
                        <option value="1">One (Not active)</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five (Very active)</option>
                    </select>
                    <div className="input-group-append">
                        <Route render={({ history }) => (
                            <button className="btn btn-outline-secondary" type="button" onClick={this.activenessSearch}>Search</button>
                        )}/>
                    </div>
                </div>
            )
        }
    }
}

export default Activeness;