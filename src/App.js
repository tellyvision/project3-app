import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";

//import Footer from "./components/Footer";
import logo from './logo.svg';
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
          {/* <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div> */}
          {/* <Footer /> */}
        </div>
      </Router>

    //);
  //}
);
//}

export default App;
