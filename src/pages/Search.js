import React, { Component } from 'react';
import SearchSelector from "../components/SearchComponents/SearchSelector"
import Activeness from "../components/SearchComponents/Activeness"
import Breed from "../components/SearchComponents/Breed"
import Size from "../components/SearchComponents/Size"
import SocialChildren from "../components/SearchComponents/SocialChildren"
import SocialDog from "../components/SearchComponents/SocialDog"
import SocialPeople from "../components/SearchComponents/SocialPeople"
import ResultsCard from "../components/Results/ResultsCard"

class Search extends Component {

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
                        ||  window.location.pathname === "/search/activeness" && <Activeness />
                        ||  window.location.pathname === "/search/size" && <Size />
                        ||  window.location.pathname === "/search/socialdog" && <SocialDog />
                        ||  window.location.pathname === "/search/socialpeople" && <SocialPeople />
                        || <SocialChildren />
                        }
                    </div>

                    <div>
                        {window.location.pathname === "/search/results" && this.props.list.map((dog) => (
                            <ResultsCard dog_id={dog.dog_id} picture={dog.picture} name={dog.name} breed={dog.breed} size={dog.size} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;