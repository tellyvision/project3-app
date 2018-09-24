import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this)	
	}

logout(event) {
	event.preventDefault()
	console.log('logging out')
	axios.post('/user/logout').then(response => {
		console.log(response.data)
		if (response.status === 200) {
			this.props.updateUser({
				loggedIn: false,
				username: null
			})
		}
	}).catch(error => {
		console.log('Logout error')
	})
}

render() {
	const loggedIn = this.props.loggedIn;
	console.log('navbar render, props: ')
	console.log(this.props);
        return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light" containerStyle="background-color: #e3f2fd">
            <Link to ="/" className="navbar-brand">Dogs</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav mr-auto">
				
                <li className={window.location.pathname === "/"
                ? "nav-item nav-link active"
				: "nav-item nav-link"}><Link to ="/">Home</Link>
				</li>
				
                <li className={window.location.pathname === "/search"
                ? "nav-item nav-link active"
				: "nav-item nav-link"}><Link to ="/search">Search</Link>
				</li>
				
                <li className={window.location.pathname === "/login"
                ? "nav-item nav-link active"
				: "nav-item nav-link"}><Link to ="/login">Log In</Link>
				</li>
				
				<li className={window.location.pathname === "/userRegister"
				? "nav-item nav-link active"
				: "nav-item nav-link"}><Link to ="/userRegister">Register</Link>
				</li>
                {/* TODO: Conditional rendering if logged in, show profile instead of login */}
                </ul>
            </div>
        </nav>
        )
    }
    
}

export default Navbar;