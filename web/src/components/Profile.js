import React, { Component } from 'react'
import { User } from '../components'
import './Profile.css'
import PropTypes from 'prop-types';

export default class Profile extends Component {
	render () {
		return (
			<div className='profile'>
				<User user={this.props.user}/>
			</div>
		)
	}
}

Profile.propTypes = {
	user: PropTypes.object.isRequired
};