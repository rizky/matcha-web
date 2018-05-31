import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import './Photo.css'
import { dispatch } from '../index'
import * as UserActions from '../redux/actions/user'
import { Comments } from '../components'

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
		const wellStyles = { maxWidth: 400, margin: '0 auto' }

		var user = this.props.user
		return (
			<div className='photo' id={`user_${user.id}`}>
				<a href={`/users/${user.id}`}>
					<div><img src={user.image} alt=''/></div>
				</a>
				<a href={`/account/${user.username}`}>
					<i className='fas fa-user-circle'></i>
					<span className='user'>{user.username}</span>
				</a>
				<div>
					<i className='fa fa-ellipsis-v' style={{ float: 'right' }} onClick={this.handleShow}></i>
				</div>
				<Modal show={this.state.show} onHide={this.handleClose} bsSize="small">				
					<div className="well" style={wellStyles}>
					<Button onClick={this.handleDelete} bsStyle="danger" block>Delete</Button>
					<Button onClick={this.handleClose} block>Share to Twitter</Button>
					<Button onClick={this.handleClose} block>Cancel</Button>
					</div>
				</Modal>	
			</div>
		)
	}
}