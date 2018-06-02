import React, { Component } from 'react'
import { User } from '../components'
import './Profile.css'

export default class Profile extends Component {
	render () {
		return (
			<div className='profile'>
				<User user={this.props.user}/>
			</div>
		)
	}
}