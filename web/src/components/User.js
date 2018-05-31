import React, { Component } from 'react'
import './Photo.css'
import { dispatch } from '../index'
import * as UserActions from '../redux/actions/user'

export default class User extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			show: false
		}
	}

	handleDelete = () => {
		dispatch(UserActions.deleteUser(this.props.user.id))
		this.handleClose()
	}

	handleClose = () => {
		this.setState({ show: false })
	}

	handleShow = () => {
		this.setState({ show: true })
	}

	render () {
		let user = this.props.user
		let age = this.age(Date.parse(user.dob))
		return (
			<div className='photo' id={`user_${user.id}`}>
				<a href={`/users/${user.id}`}>
					<div><img className='picture' src={user.picture} alt=''/></div>
				</a>
				<div>
					<a href={`/account/${user.username}`}>
						<span className='user'>{user.name}, </span>
						<span>{age}</span>
					</a>
					<i className='fa fa-ellipsis-v' style={{ float: 'right' }} onClick={this.handleShow}></i>
				</div>
			</div>
		)
	}

	age(date) {
		var seconds = Math.floor((new Date() - date) / 1000)
		var interval = Math.floor(seconds / 31536000)
		return interval;
	}
}