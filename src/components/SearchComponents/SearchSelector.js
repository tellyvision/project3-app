import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

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
            <option className="dropdown-item" value="search/socialchildren">Socialability with Children</option>
            <option className="dropdown-item" value="search/socialdog">Socialability with Other Dogs</option>
            <option className="dropdown-item" value="search/socialpeople">Socialability with Other People</option>
        </select>
      );
    }
  }

export default withRouter(SearchSelector)