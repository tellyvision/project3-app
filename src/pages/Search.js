import React, { Component } from 'react';
import SearchSelector from "../components/SearchComponents/SearchSelector"
import Activeness from "../components/SearchComponents/Activeness"
import Breed from "../components/SearchComponents/Breed"
import Size from "../components/SearchComponents/Size"
import SocialChildren from "../components/SearchComponents/SocialChildren"
import SocialDog from "../components/SearchComponents/SocialDog"
import SocialPeople from "../components/SearchComponents/SocialPeople"


class Search extends Component {

    render() {
        return(
            <div>
                <div>
                    <SearchSelector />
                </div>

                <div>
                    {this.props.Search == "Activeness" && <Activeness />

                    || this.props.Search == "Breed" &&
                        <Breed />
                    || this.props.Search == "Size" &&
                        <Size />
                    || this.props.Search == "SocialDog" &&
                        <SocialDog />
                    || this.props.Search == "SocialPeople" &&
                        <SocialPeople />
                    ||
                        <SocialChildren />
            }
                </div>
            </div>
        )
    }
}

export default Search;