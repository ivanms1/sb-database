import { SELECT_CONTACT } from '../actions';

const initialState = {
	id: "",
	name: "",
	email:"",
	phone: "",
	address: "",
	muban: "",
	tambon: "",
	organization: ""
}

const selectedContact = (
	state = initialState,
	action) => {
	switch (action.type) {
		case SELECT_CONTACT:
			return state = {
				...state,
				id: action.contact._id,
				name: action.contact.name,
				email: action.contact.email,
				phone: action.contact.phone,
				address: action.contact.address,
				muban: action.contact.muban,
				tambon: action.contact.tambon,
				organization: action.contact.organization
			}
		default:
			return state;
	}
}

export default selectedContact