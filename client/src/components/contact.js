import React from 'react';
import { Link } from 'react-router-dom';

const Contact = ({name, email, phone, address, muban, tambon, organization, edit }) => {
		return(
		<React.Fragment>
			<p>{name}</p>
			<p>{email}</p>
			<p>{phone}</p>
			<p>{address}</p>
			<p>{muban}</p>
			<p>{tambon}</p>
			<p>{organization}</p>
			<div className="buttons">
				<Link to="/edit"><button>Edit</button></Link>
			</div>
		</React.Fragment>
		)

}

export default Contact;

