import { combineReducers } from 'redux';

import messages from './messages';
import contactData from './contact-data';
import selectedContact from './selected-contact';
import { reducer as formReducer } from 'redux-form'

const rootReducers = combineReducers({
	messages,
	contactData,
	selectedContact,
	form: formReducer
});

export default rootReducers;