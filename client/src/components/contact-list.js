import React, { Component } from 'react';
import Contact from './contact';
import axios from 'axios'; 

export class ContactList extends Component {
	state = {
		data: null,
		edit: false
	}

	handleChange = this.handleChange.bind(this)
	componentDidMount(){
		axios.get('/contact')
		.then(res => this.setState({ data: res.data }))
		.catch(err => console.log(err));
	}

	handleChange(e){
		const target = e.target;
    	const value = target.value;
    	const name = target.name;

    	this.setState({
      		[name]: value
    	});
	}
	render() {
		return (
			<div className="contacts">
				<h3 className="contact-title">Contacts</h3>
				<div className="contacts-grid">
					<h6>Name</h6>
					<h6>Email</h6>
					<h6>Phone</h6>
					<h6>Address</h6>
					<h6>Mu Ban</h6>
					<h6>Tambon</h6>
					<h6>Organization</h6>
					<h6>Edit/Delete</h6>
					{
						this.state.data ?
						this.state.data.map(contact => {
							return <Contact
									key={contact.name}
									name={contact.name}
									email={contact.email}
									phone={contact.phone}
									address={contact.address}
									muban={contact.muban}
									tambon={contact.tambon}
									organization={contact.organization}
									edit={this.state.edit}
									handleChange={this.handleChange}
									/>
						}) :
						""
					}
				</div>
			</div>
		);
	}
}


export default ContactList;