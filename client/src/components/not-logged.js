import React from 'react';
import { Link } from 'react-router-dom';

const NotLogged = () => (
	<div className="not-logged-in">
		<h4>You are not logged in</h4>
		<Link to={`/`} className="btn z-depth-2 btn-large waves-effect waves-light">
			Take me to login
		</Link>
	</div>
	)

export default NotLogged;