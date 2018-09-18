import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";

//import Footer from "./components/Footer";
//import logo from './logo.svg';
//import './App.css';

//class App extends Component {
const App = () => (
  //render() {
    // return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/login" component={Login} />
          </Wrapper>
          {/* <Footer /> */}
        </div>
      </Router>

    //);
  //}
);
//}

export default App;
