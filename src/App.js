import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
//import Footer from "./components/Footer";
import createHistory from "history/createBrowserHistory";

//Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";
import ProfilePerson from "./pages/ProfilePerson";
import DogRegister from "./pages/DogRegister";
import DogWalkerBook from "./pages/ProfileDogWalker";
// import DogOwnerBooking from "./pages/ProfileDogOwner";

const history = createHistory();

//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loggedIn: false,
      username: null,
      user_id: null,
      List: [],
    }
  
   
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this) 
    this.updateListFromSearch = this.updateListFromSearch.bind(this);
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
          <Route path="/" render={(props) => <Navbar {...props} loggedIn = {this.state.loggedIn} name={this.state.username} />} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search" render={(props) => <Search {...props} passDataToApp = {this.updateListFromSearch}/>  }/> 
              
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
              <Route exact path="/profile" component={ProfilePerson} />
              <Route path="/*/register" render={(props) => <DogRegister {...props} user_id = {this.state.user_id} />} />
              <Route path="/dog-info/:dogid" render={(props) => <DogWalkerBook {...props} picture = "https://ichef.bbci.co.uk/news/660/cpsprodpb/1999/production/_92935560_robot976.jpg" dog_name = "Name" size= "testSize" breed = "testBreed" activeness = "testActiveness" microchip = "1" social_children = "testChildren" social_ppl = "testPeople" social_dog = "testDog" dog_id="testID"/>} />
            </Switch>
          {/* <Footer /> */}  
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
