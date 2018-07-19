import { MY_ACTION } from '../actions/';

let initialState = {
	message: "Hello"
	}

const messages = (
	state = initialState,
	action) => {
	switch (action.type) {
		case MY_ACTION:
			return state = { ...state, message: action.payload };
		default:
			// statements_def
			return state;
	}
}

export default messages;