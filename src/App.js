// import React from 'react'
import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import createHistory from "./history/createBrowserHistory";

//Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";

const history = createHistory();

//import Footer from "./components/Footer";
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loggedIn: false,
      username: null,
      List: "",
      Search: ""
    }
  
   
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this) 
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <BrowserRouter history={history}>
        <div>
          <Route component={Navbar} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Search}  />
              <Route
                path="/login"
                render={() =>
                  <Login
                    updateUser={this.updateUser}
                  />}
              />
              <Route
                path="/userRegister"
                render={() =>
                  <UserRegister/>}
              />
            </Switch>
          {/* <Footer /> */}  
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
