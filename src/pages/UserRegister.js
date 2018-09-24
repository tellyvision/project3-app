import React, { Component } from 'react'
import axios from 'axios'

class UserRegister extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
			postal: '',
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		// console.log('sign-up handleSubmit, email: ')
		// console.log(this.state.email)
		event.preventDefault()

		//request to server to add a new email/password
		axios.post('/user/', {
			email: this.state.email,
			name: this.state.name,
			password: this.state.password,
			postal: this.state.postal,
		})
			.then(response => {
				console.log(response)
				if (!response.data.error) {
					console.log('successful signup')
					this.setState({                    //redirect to login page ---> Maybe make a "sign up successful" page or alert
						redirectTo: '/login'
					})
				} else {
					console.log('email already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	return (
		<div className="SignupForm">
			<h4>Sign up</h4>
			<form className="form-horizontal">

				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="name">Name: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="name"
							name="name"
							placeholder="Please Enter Your Name"
							value={this.state.name}
							onChange={this.handleChange}
						/>
					</div>
				</div>


				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="email">Email: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							type="text"
							id="email"
							name="email"
							placeholder="Please enter a valid E-mail"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password">Password: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="Password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password">Postal Code: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="A#A#A#"
							type="postal"
							name="postal"
							value={this.state.postal}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				
				<div className="form-group ">
					<div className="col-7"></div>
					<button
						className="btn btn-primary col-1 col-mr-auto"
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>

			</form>
		</div>

	)
}
}

export default UserRegister
