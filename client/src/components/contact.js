import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSelectedData } from '../actions';

const Contact = ({id, name, email, phone, address, muban, tambon, organization, getSelectedData }) => {
		return(
		<React.Fragment>
			<tr>
				<td>{name}</td>
				<td>{email}</td>
				<td>{phone}</td>
				<td>{address}</td>
				<td>{muban}</td>
				<td>{tambon}</td>
				<td>{organization}</td>
				<td>
					<Link className="z-depth-2 waves-effect waves-light btn" onClick={() => getSelectedData(id)} to={`/edit`}>Edit</Link>
				</td>
			</tr>
		</React.Fragment>
		)

}

const mapDispatchToProps = {
	getSelectedData
}

export default connect(null, mapDispatchToProps)(Contact);

