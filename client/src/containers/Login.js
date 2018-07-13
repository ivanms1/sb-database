import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Login extends Component {
	state = {
		email: "",
		password: ""
	}

	handleChange = this.handleChange.bind(this);

	handleChange(e){
		const target = e.target;
    	const value = target.value;
    	const name = target.name;

    	this.setState({
      		[name]: value
    	});

	}
	render() {
		return (
			<form className="login-form">
				<div className="input-field col s6">
          			<input name="email"
          				id="email" 
          				value={this.state.email}
          				onChange={this.handleChange}
          				type="email" className="validate"/>
          			<label htmlFor="email">Email</label>
        		</div>
        		<div className="input-field col s6">
          			<input name="password"
          				id="password"
          				value={this.state.password}
          				onChange={this.handleChange}
          				type="password"
          				className="validate"/>
          			<label htmlFor="password">Password</label>
          			<Link to="/contacts">Submit</Link>
        		</div>
			</form>
		);
	}
}
