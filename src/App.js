import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
//import Footer from "./components/Footer";
import createHistory from "history/createBrowserHistory";

//Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import DashboardPage from './pages/DashboardPage.js';
import LogoutFunction from './pages/LogoutFunction.js';
import UserRegister from "./pages/UserRegister";
// import ProfilePerson from "./pages/ProfilePerson"; //Not Completed
import DogRegister from "./pages/DogRegister";
import DogWalkerBook from "./pages/ProfileDogWalker";
// import DogOwnerBooking from "./pages/ProfileDogOwner";
import ProfilePersonDogListing from "./pages/ProfilePersonDogListing";
// import ProfileDogOwner from "./pages/ProfileDogOwner";

//Passport Related Thing
import Auth from './modules/Auth';

const history = createHistory();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props} {...rest} />
    )
  )}/>
)

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
)

//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authenticated: false,
      email: null,
      user_id: null,
      List: [],
    }

    // this.getUser = this.getUser.bind(this);
    this.updateListFromSearch = this.updateListFromSearch.bind(this);
    this.getOwnerDogList = this.getOwnerDogList.bind(this);

  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus();

    //get user id
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        console.log("this is user information:")
        console.log(xhr.response.user)
        this.setState({
          user_id: xhr.response.user._id
        });
      }
    });
    xhr.send();
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  getUser(){
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
        console.log("this is user email:")
        console.log(xhr.response.user.email)
        this.setState({
          email: xhr.response.user.email,
          user_id: xhr.response.user._id
        }); 
    });
    xhr.send();
  }

  getOwnerDogList() {
    if(this.state.authenticated === true && this.state.email !== "") {
      axios.get('http://localhost:3001/api/ownerDogSearch', {
            params:{
                userID: this.props.user_id
            }
        })
        .then((res) => {
            console.log("res owner's dogs: ")
            console.log(res);
            let owner_dog_list = res.data;
            console.log("new owner's doglist state: ");
            console.log(this.state.ownerDogList);
        })
        .catch(function(err) {
            console.log(err);
        });
    }
  }

  updateListFromSearch(dataFromSearch) {
    this.setState({
      List: dataFromSearch
    });
    console.log("updated this.state.list: ")
    console.log(this.state.List);
  }

  render() {
    return (
      <BrowserRouter history={history} >
        <div>
          <Route path="/" render={(props) => <Navbar {...props} authenticated={this.state.authenticated} name={this.state.email}/>} />
            <Switch>
              <PropsRoute exact path="/" component={Home} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
              <PrivateRoute path="/dashboard" component={DashboardPage}/>
              <LoggedOutRoute path="/login" component={Login} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
              <LoggedOutRoute path="/userregister" component={UserRegister}/>
              <Route path="/logout" component={LogoutFunction}/>
              {/* <Route exact path="/profile" component={ProfilePerson} /> */}
              <Route path="/search" render={(props) => <Search {...props} passDataToApp = {this.updateListFromSearch}/>  }/> 
              <Route path="/*/register" render={(props) => <DogRegister {...props} user_id = {this.state.user_id} />} />
              <Route exact path="/your-dog-listing" render={(props) => <ProfilePersonDogListing {...props} user_id = {this.state.user_id} user_dog_list = {this.owner_dog_list}/>} />
              <Route path="/dog-info/:dog_id" render={(props) => <DogWalkerBook {...props} history={history} user_id = {this.state.user_id} />} />
            </Switch>
          {/* <Footer /> */}  
        </div>
      </BrowserRouter>

    );
  }
}

export default App;