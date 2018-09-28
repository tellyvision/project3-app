import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
//import Wrapper from "./components/Wrapper/Wrapper";
//import Footer from "./components/Footer";
import createHistory from "history/createBrowserHistory";

//Pages
import Home from "./pages/Home";
import Search from "./pages/Search";

/////////PASSPORT
import LoginPage from './pages/LoginPage.js';
import LogoutFunction from './pages/LogoutFunction.js';
import SignUpPage from './pages/SignUpPage.js';
import DashboardPage from './pages/DashboardPage.js';
import Auth from './modules/Auth';

//////////PASSPORT

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
      authenticated: false
    }
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Route component={Navbar} />
            
            <PropsRoute exact path="/" component={Home} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <PrivateRoute path="/dashboard" component={DashboardPage}/>
            <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute path="/signup" component={SignUpPage}/>
            <Route path="/logout" component={LogoutFunction}/>
            
          {/* <Footer /> */}  
        </div>
      </Router>

    );
  }
}

export default App;
