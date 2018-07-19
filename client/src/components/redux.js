import React from 'react';
import { connect } from 'react-redux';
import { myAction, getContactData } from '../actions';

const Redux = ({message, getContactData}) => {
	return(
		<div>
			<p>{message}</p>
			<button onClick={() => getContactData()}>Spanish</button>
		</div>
		)
}

function mapStateToProps(state) {
    return {
    	message: state.messages.message,
        contacts: state.contactData.contacts
        }
    }
const mapDispatchToProps = {
	myAction,
	getContactData
}

export default connect(mapStateToProps, mapDispatchToProps)(Redux);