import React from 'react'
// import React, { Component }  from 'react';
import { Link } from "react-router-dom"

const Login = (props) => {
    return(
        <div>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Log In</button> Don't have an account? <Link to="/DogRegister">Sign up today</Link>
            </form>
        </div>
    )
}

export default Login;