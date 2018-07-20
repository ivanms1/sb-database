import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import M from 'materialize-css';
import NotLogged from './not-logged';
import { updateContact, deleteContact, successReq } from '../actions';

const selector = formValueSelector('editContact')

let EditContact = ({handleSubmit, contactData, id, updateContact, deleteContact, redirect, successReq, loggedIn}) => {
	let sendData = (values, id) => {
		updateContact(values, id);
		M.toast({html: 'Contact Updated'});

	}

	let sendId = (id) => {
		deleteContact(id);
		M.toast({html: 'Contact Deleted'});
		successReq(true)
	}

	return(
		loggedIn
		?
		<React.Fragment>
		<div className="fixed-action-btn">
		<Link to={`/contacts`} className="pulse z-depth-5 btn-floating btn-large waves-effect waves-light">Back</Link>	
		</div>
		<form className="edit-form" onSubmit={handleSubmit(() => sendData(contactData, id))}>
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
		    <div className="edit-buttons">
        		<button className="btn waves-effect waves-light z-depth-5" type="submit">Submit</button>
        		<button onClick={() => sendId(id)} className="btn-small waves-effect waves-light z-depth-5 red" type="button">Delete</button>
      		</div>
		</form>
		{
			redirect ? <Redirect to='/contacts'/>
			:
			null
		}
		</React.Fragment>
		:
		<NotLogged/>
		)
}

EditContact = reduxForm({
	form: 'editContact',
	enableReinitialize: true
})(EditContact)

EditContact = connect(
	state => ({
		initialValues: state.selectedContact,
		contactData: selector(state,
								'name',
								'email',
								'phone',
								'address',
								'muban',
								'tambon',
								'organization'),
		id: state.selectedContact.id,
		redirect: state.contactData.success,
		loggedIn: state.contactData.loggedIn
	}),
	{updateContact, deleteContact, successReq}
)(EditContact)

export default EditContact