import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contact from './contact';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import { getContactData, filterContacts, successReq } from '../actions';

class ContactList extends Component {

	state = {
		selector: 'name'
	}

	searchBar = this.searchBar.bind(this);
	handleChange = this.handleChange.bind(this);

	componentDidMount(){
		document.addEventListener('DOMContentLoaded', function() {
    		let elems = document.querySelectorAll('select');
    		let options = {};
    		M.FormSelect.init(elems, options);
  		});

  		this.props.successReq(false)
	}

	componentWillMount(){
		this.props.getContactData();
	}

	searchBar(e) {
		if(this.state.selector === 'name'){
			let filtered = this.props.contacts.filter(contact => {
			return contact.name.toLowerCase().includes(e.target.value.toLowerCase())
		});
		this.props.filterContacts(filtered);
		}

		if(this.state.selector === 'tambon'){
			let filtered = this.props.contacts.filter(contact => {
			return contact.tambon.toLowerCase().includes(e.target.value.toLowerCase())
		});
		this.props.filterContacts(filtered);
		}

		if(this.state.selector === 'organization'){
			let filtered = this.props.contacts.filter(contact => {
			return contact.organization.toLowerCase().includes(e.target.value.toLowerCase())
		});
		this.props.filterContacts(filtered);
		}
	}

	handleChange(e){
		this.setState({ selector: e.target.value})
	}

	handleSubmit(e){
		e.preventDefault();
	}

	renderContent(){
		if(!this.props.loading) {
			return (
				<React.Fragment>
					<div className="contact-list-header">
						<h3 className="contact-title">Contacts</h3>
						<Link to={`/add`} className="btn-floating z-depth-2 btn-large waves-effect waves-light">
							<i className="material-icons">add</i>
						</Link>
					</div>
				    <div className="nav-wrapper">
				      <form onSubmit={this.handleSubmit}>
				        <div className="input-field white z-depth-1">
				          <input onChange={this.searchBar} placeholder="Search" id="search" type="search" required/>
				          <label className="label-icon " htmlFor="search"><i className="material-icons">search</i></label>
				          <i className="material-icons">close</i>
				        </div>
				        <div className="input-field">
							<select onChange={this.handleChange} className="browser-default">
						      <option value="" disabled defaultValue>Search by</option>
						      <option value="name">Name</option>
						      <option value="tambon">Tambon</option>
						      <option value="organization">Organization</option>
						    </select>
						</div>
				      </form>
				    </div>
				<table className="highlight centered">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Address</th>
						<th>Mu Ban</th>
						<th>Tambon</th>
						<th>Organization</th>
						<th></th>
					</tr>
				</thead>
				{
					!this.props.filtered ?
					this.props.contacts.map(contact => {
							return (
								<tbody key={contact._id}>
									<Contact
									id={contact._id}
									name={contact.name}
									email={contact.email}
									phone={contact.phone}
									address={contact.address}
									muban={contact.muban}
									tambon={contact.tambon}
									organization={contact.organization}
									/>
								</tbody>
								)
						})
					:
					this.props.filtered.map(contact => {
							return (
								<tbody key={contact._id}>
									<Contact
									id={contact._id}
									name={contact.name}
									email={contact.email}
									phone={contact.phone}
									address={contact.address}
									muban={contact.muban}
									tambon={contact.tambon}
									organization={contact.organization}
									/>
								</tbody>
								)
						})
				}
			</table>
			</React.Fragment>
			)
		}

		return (
			<div className="progress">
      			<div className="indeterminate"></div>
  			</div>
			)
	}	

	render() {
		return (
			<div className="contacts">
				{
					this.renderContent()
				}
			</div>
		);
	}
}


function mapStateToProps(state) {
    return {
        contacts: state.contactData.contacts,
        filtered: state.contactData.filtered,
        loading: state.contactData.loadingData
        }
    }
    
const mapDispatchToProps = {
	getContactData,
	filterContacts,
	successReq
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);