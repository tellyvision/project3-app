import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import $ from 'jquery';
import axios from 'axios';

class Breed extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          dataFromSearchComp: null,
          redirectTo: null
        }

        this.breedSearch = this.breedSearch.bind(this);
    }

    breedSearch(){

        axios.get('http://localhost:3001/api/search', {
                params:{
                    column: 'breed',
                    columnVar: $('#inputGroupSelect04').val()
                }
            })
            .then((res)=>{
                console.log(res)                  
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
                        <option selected disabled="disabled">Choose Breed...</option>
                        <option value="AppenzellerSennenhunde">Appenzeller Sennenhunde</option>
                        <option value="Beagle">Beagle</option>
                        <option value="Bulldog">Bulldog</option>
                        <option value="Cattledog">Cattledog</option>
                        <option value="Chowchow">ChowChow</option>
                        <option value="Collie">Collie</option>
                        <option value="Corgi">Corgi</option>
                        <option value="Dalmatian">Dalmatian</option>
                        <option value="EskimoDog">Eskimo Dog</option>
                        <option value="Hound">Hound</option>
                        <option value="Mastiff">Mastiff</option>
                        <option value="Mutt">Mutt</option>
                        <option value="Pinocher">Pinocher</option>
                        <option value="Pomeranian">Pomeranian</option>
                        <option value="Pug">Pug</option>
                        <option value="retriever">Retriever</option>
                        <option value="Sheepdog">Sheepdog</option>
                        <option value="SheppardDog">Sheppard Dog</option>
                        <option value="Terrier">Terrier</option>
                        <option value="ShihTzu">Shih Tzu</option>
                        <option value="Spaniel">Spaniel</option>
                        <option value="Terrier">Terrier</option>
                        <option value="Yorkipoo">Yorkipoo</option>
                    </select>
                    <div className="input-group-append">
                        <Route render={() => (
                            <button className="btn btn-outline-secondary" type="button" onClick={this.breedSearch}>Search</button>
                        )}/>
                    </div>

                </div>
            )
        }
    }
}

export default Breed;