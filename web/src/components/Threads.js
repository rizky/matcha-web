import React, { Component } from 'react'
import { Thread } from '../components'
import './Threads.css'
import { dispatch } from '../index'
import * as UserActions from '../redux/actions/user'

export default class Threads extends Component {
	selectUser = (user) => {
		dispatch(UserActions.selectUser(user))
	}

	render () {
		let users = this.props.users.map ( user => {
			return (<Thread key={user.id} user={user} onClick={() => this.selectUser(user)} />)
		})
		return (
			<div className='threads'>{users}</div>
		)
	}
}