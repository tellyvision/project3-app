// import React from 'react'
import React, { Component } from 'react';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import createHistory from "history/createBrowserHistory";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";

const history = createHistory();

//import Footer from "./components/Footer";
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loggedIn: false,
      userId: "",
      username: "",
      List: "",
      Search: ""
    }
  
  }
  render() {
    return (
      <BrowserRouter history={history}>
        <div>
          <Route component={Navbar} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Search}  />
              <Route exact path="/login" component={Login} />
            </Switch>
          {/* <Footer /> */}  
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
