import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import SearchSelector from "../components/SearchComponents/SearchSelector"
import Activeness from "../components/SearchComponents/Activeness"
import Breed from "../components/SearchComponents/Breed"
import Size from "../components/SearchComponents/Size"
import SocialChildren from "../components/SearchComponents/SocialChildren"
import SocialDog from "../components/SearchComponents/SocialDog"
import SocialPeople from "../components/SearchComponents/SocialPeople"
import ResultsCard from "../components/Results/ResultsCard";

class Search extends Component {

    constructor(props){
        super(props);

        this.childDataCallback = this.childDataCallback.bind(this);

        this.state = {
          dataFromSearchComp: null
        }
    }

    childDataCallback = (dataFromChild) =>{
        // var thisObj = this;
        // pass data up to App (parent)
        this.props.passDataToApp(dataFromChild);

        // pass data from searchbars down to resultsCards for display
        this.setState({
            dataFromSearchComp: dataFromChild
        })
        console.log("new search state: ");
        console.log(this.state.dataFromSearchComp);
        if (this.state.dataFromSearchComp) {
            return <Redirect to={"/search/results"} />
        }
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <SearchSelector />
                    </div>

                    <div className="col-md-9">
                        {
                            window.location.pathname === "/search/breed" && <Breed />
                        ||  window.location.pathname === "/search/activeness" && <Activeness passDataToSearch={this.childDataCallback}/>
                        ||  window.location.pathname === "/search/size" && <Size />
                        ||  window.location.pathname === "/search/socialdog" && <SocialDog />
                        ||  window.location.pathname === "/search/socialpeople" && <SocialPeople />
                        || <SocialChildren />
                        }
                    </div>

                    <div>
                        {window.location.pathname === "/search/results" && this.state.dataFromSearchComp.map((dog) => (
                           <ResultsCard key={dog.dog_id} dog_id={dog.dog_id} picture={dog.picture} name={dog.name} breed={dog.breed} size={dog.size} />
                        ))}
                     </div>
                </div>
            </div>
        )
    }
}

export default Search;