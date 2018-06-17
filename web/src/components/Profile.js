import React, { Component } from 'react'
import { User } from '../components'
import './Profile.css'

export default class Profile extends Component {
	render () {
		const { user } = this.props
		return (
			<div className='profile'>
				<User user={user}/>
			</div>
		)
	}
}