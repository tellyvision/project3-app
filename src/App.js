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
import ProfilePerson from "./pages/ProfilePerson";
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
      username: null,
      user_id: null,
      List: [],
    }

    this.updateListFromSearch = this.updateListFromSearch.bind(this);
    this.getOwnerDogList = this.getOwnerDogList.bind(this);

  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  getOwnerDogList() {
    if(this.state.loggedIn === true && this.state.username !== "") {
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
          <Route path="/" render={(props) => <Navbar {...props} authenticated={this.state.authenticated} name={this.state.username}/>} />
            <Switch>
              <PropsRoute exact path="/" component={Home} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
              <PrivateRoute path="/dashboard" component={DashboardPage}/>
              <LoggedOutRoute path="/login" component={Login} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
              <LoggedOutRoute path="/userregister" component={UserRegister}/>
              <Route path="/logout" component={LogoutFunction}/>
              <Route exact path="/profile" component={ProfilePerson} />
              <Route path="/*/register" render={(props) => <DogRegister {...props} user_id = {this.state.user_id} />} />
              <Route exact path="/your-dog-listing" render={(props) => <ProfilePersonDogListing {...props} user_id = {this.state.user_id} user_dog_list = {this.owner_dog_list}/>} />
              <Route path="/dog-info/*" render={(props) => <DogWalkerBook {...props} picture = "https://ichef.bbci.co.uk/news/660/cpsprodpb/1999/production/_92935560_robot976.jpg" dog_name = "testName" size= "testSize" breed = "testBreed" activeness = "testActiveness" microchip = "1" social_children = "testChildren" social_ppl = "testPeople" social_dog = "testDog" dog_id="testID"/>} />
              

            </Switch>
          {/* <Footer /> */}  
        </div>
      </BrowserRouter>

    );
  }
}

export default App;