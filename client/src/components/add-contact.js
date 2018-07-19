import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

import { addContact } from '../actions';

let AddContact = ({ handleSubmit, addContact }) => {

	let addData = values => {
		addContact(values);
		M.toast({html: 'Contact Added'});
	}
	return(
		<React.Fragment>
		<div className="fixed-action-btn">
		<Link to={`/contacts`} className="pulse z-depth-5 btn-floating btn-large waves-effect waves-light">Back</Link>	
		</div>
		<h5>Add Contact</h5>
		<form className="add-form" onSubmit={handleSubmit((values) => addData(values))}>
			<div>
		    	<label htmlFor="name">Name</label>
		        <Field name="name" component="input" type="text" />
		    </div>
		    <div>
		    	<label htmlFor="email">Email</label>
		        <Field name="email" component="input" type="text" />
		    </div>
		    <div>
		    	<label htmlFor="phone">Phone</label>
		        <Field name="phone" component="input" type="text" />
		    </div>
		    <div>
		    	<label htmlFor="address">Address</label>
		        <Field name="address" component="input" type="text" />
		    </div>
		    <div>
		    	<label htmlFor="muban">Mu Ban</label>
		        <Field name="muban" component="input" type="text" />
		    </div>
		    <div>
		    	<label htmlFor="tambon">Tambon</label>
		        <Field name="tambon" component="input" type="text" />
		    </div>
		    <div>
		    	<label htmlFor="organization">Organization</label>
		        <Field name="organization" component="input" type="text" />
		    </div>
		    <div className="add-buttons">
        		<button className="btn waves-effect waves-light z-depth-5" type="submit">Add Contact</button>
      		</div>
		</form>
		</React.Fragment>
		)
}

AddContact = reduxForm({
	form: 'addcontact'
})(AddContact)

AddContact = connect(
	null,
	{addContact}
)(AddContact)

export default AddContact