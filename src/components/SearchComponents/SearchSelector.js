import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

// function searchDropdown() {
//     document.getElementById("searchDropdown").classList.toggle("show");
//     document.getElementById("criteriaSelector").classList.toggle("show");
// }

// function redirectActiveness() {
//     return <Redirect to=`/search/activeness` />
// }

// class SearchSelector extends Component {
//     render() {
//         return(
//             <div className="input-group mb-3">
//                 <div className="custom-select" id="searchDropdown">
//                     {/* <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={searchDropdown}>Search Criteria</button> */}
//                     {/* <div className="dropdown-menu" id="criteriaSelector"> */}
//                     <select className="custom-select" aria-label="Example select with button addon" id="criteriaSelector" onChange =}>
//                         <option selected>Search Criteria</option>
//                         <option className="dropdown-item">Activeness</option>
//                         <option className="dropdown-item" value="/search/breed">Breed</option>
//                         <option className="dropdown-item" value="/search/size">Size</option>
//                         {/* <div role="separator" className="dropdown-divider"></div> */}
//                         <option className="dropdown-item" value="/search/socialchildren">Socialability with Children</option>
//                         <option className="dropdown-item" value="/search/socialdog">Socialability with Other Dogs</option>
//                         <option className="dropdown-item" value="/search/socialpeople">Socialability with Other People</option>
//                     </select>
//                     {/* </div> */}
//                 </div>
//             </div>
//         )
//     }
// }

class SearchSelector extends Component {
    onChange = (e) => {
      this.props.history.push(`/${e.target.value}`);
    }
    render() {
      return (
        <select onChange={this.onChange.bind(this)}>
            <option selected>Search Criteria</option>
            <option className="dropdown-item" value="search/activeness">Activeness</option>
            <option className="dropdown-item" value="search/breed">Breed</option>
            <option className="dropdown-item" value="search/size">Size</option>
            {/* <div role="separator" className="dropdown-divider"></div> */}
            <option className="dropdown-item" value="search/socialchildren">Socialability with Children</option>
            <option className="dropdown-item" value="search/socialdog">Socialability with Other Dogs</option>
            <option className="dropdown-item" value="search/socialpeople">Socialability with Other People</option>
        </select>
      );
    }
  }

export default withRouter(SearchSelector)