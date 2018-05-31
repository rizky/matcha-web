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
		var user = this.props.user
		return (
			<div className='photo' id={`user_${user.id}`}>
				<a href={`/users/${user.id}`}>
					<div><img className='picture' src={user.picture} alt=''/></div>
				</a>
				<div>
					<a href={`/account/${user.username}`}>
						<span className='user'>{user.name}, </span>
						<span className='user'>{user.username}</span>
					</a>
					<i className='fa fa-ellipsis-v' style={{ float: 'right' }} onClick={this.handleShow}></i>
				</div>
			</div>
		)
	}
}