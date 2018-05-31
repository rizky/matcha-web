import React, { Component } from 'react'
import { User } from '../components'
import './Photo.css'
import { dispatch } from '../index'
import * as UserActions from '../redux/actions/user'

export default class Users extends Component {
	componentDidMount() {
		dispatch(UserActions.loadUsers())
	}

	render () {
		let users = this.props.users.map ( user => {
			return (<User key={user.id} user={user}/>)
		})
		return (
			<div className='photos'>{users}</div>
		)
	}
}