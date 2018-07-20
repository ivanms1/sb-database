import axios from 'axios';
import {reset} from 'redux-form';
import M from 'materialize-css';

export const MY_ACTION = "MY_ACTION";
export const CONTACT_DATA = "CONTACT_DATA";
export const FILTER_DATA = "FILTER_DATA";
export const SELECT_CONTACT = "SELECT_CONTACT";
export const REDIRECT = "REDIRECT";
export const LOGIN = "LOGIN";

export function myAction() {
	return {
		type: MY_ACTION,
		payload: 'Hallo'
	}
}

export function loadContactData(data) {
	return {
		type: CONTACT_DATA,
		data
	}
}

export function getContactData() {
	return dispatch => {
		return axios.get('/contact')
		.then(res => {
		dispatch(loadContactData(res.data));
		})
		.catch(err => console.log(err));
	}

}

export function getSelectedData(id) {
	return dispatch => {
		return axios.get(`/contact/${id}`)
		.then(res => dispatch(loadSelectedData(res.data)))
		.catch(err => console.log(err))
	}
}

export function loadSelectedData(contact) {
	return {
		type: SELECT_CONTACT,
		contact
	}
}

export function updateContact(update, id) {
	return dispatch => {
		return axios.put(`/contact/${id}`, update)
		.then(res => {
			if(res.status === 200) console.log('create success reducer');
		})
		.catch(err => console.log(err));
	}
}

export function filterContacts(data) {
	return  {
		type: FILTER_DATA,
		data
	}
}

export function deleteContact(id){
	return dispatch => {
		return axios.delete(`/contact/${id}`)
		.then(res => {
			if(res.status === 200) console.log('create success reducer');
		})
		.catch(err => console.log(err));
	}
}

export function addContact(values){
	return dispatch => {
		return axios.post(`/contact`, values)
		.then(res => {
			if(res.status === 200) {
				console.log('create success reducer');
				dispatch(reset('addcontact'));
			}
		})
		.catch(err => console.log(err.response));
	}
}

export function successReq(bool){
	return {
		type: REDIRECT,
		data: bool
	}
}

export function sendLogin(user){
	return dispatch => {
		return axios.post('/user/login', user)
		.then(res => {
			if(res.status === 200) {
				dispatch(successReq(true))
				dispatch(getContactData())
				dispatch(logIn(true))
			}
		})
		.catch(err => M.toast({html: err.response.data.msg}));
	}
}

export function logIn(bool) {
	return {
		type: LOGIN,
		data: bool
	}
}