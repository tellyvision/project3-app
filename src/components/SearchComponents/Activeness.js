import React, { Component } from "react";

import { Link } from "react-router-dom";
import $ from 'jquery';
import axios from 'axios';

import ResultsCard from "../Results/ResultsCard";




class Activeness extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          dataFromSearchComp: null
        }

        this.activenessSearch = this.activenessSearch.bind(this);
    }

    activenessSearch(){
        // var thisObj = this;
        axios.get('http://localhost:3001/api/search', {
            params:{
                column: 'activeness',
                columnVar: $('#inputGroupSelect04').val()
            }
        })
        .then((res)=>{
            console.log("res: ")
            console.log(res);
            // let searchResult = res.data;
            
            this.props.passDataToSearch(res.data);
            this.setState({
                dataFromSearchComp: res.data
            }) 
        })
        .catch(function(err) {
            console.log(err);
        });
    }


    render() {
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
                    <button className="btn btn-outline-secondary" type="button" onClick={this.activenessSearch}>Search</button>
                </div>

                {/* <div className="search-result-container">
                {
                    this.state.dataFromSearchComp ?
                    this.state.dataFromSearchComp.map((dog) => (
                        <ResultsCard key={dog.dog_id} dog_id={dog.dog_id} picture={dog.picture} name={dog.name} breed={dog.breed} size={dog.size} />
                     )) : ""
                }
                </div> */}
            </div>

            

            
        )
    }
}

export default Activeness;