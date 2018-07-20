import { CONTACT_DATA, FILTER_DATA, REDIRECT, LOGIN } from '../actions';

const initialState = {
	contacts: [],
	filtered: null,
	loadingData: true,
	success: false,
	loggedIn: false
};

const contactData = (
	state = initialState,
	action) => {
	switch (action.type) {
		case CONTACT_DATA:
			return state = {...state,
							contacts: action.data,
							loadingData: false}
		case FILTER_DATA:
			return state = {...state,
							filtered: action.data
							}
		case REDIRECT:
			return state = {...state,
							success: action.data
							}
		case LOGIN:
			return state = {...state,
							loggedIn: action.data
							}
		default:
			return state;
	}
}

export default contactData;