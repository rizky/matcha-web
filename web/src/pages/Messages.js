import React, { Component } from 'react'
import { Threads, Profile } from '../components'
import { dispatch } from '../index'
import * as UserActions from '../redux/actions/user'

class Messages extends Component {
	componentDidMount() {
		dispatch(UserActions.loadUsers())
	}

	render() {
		const messagePage = {
			display: 'grid',
			gridTemplate: '1fr / min-content auto min-content',
			width: '100%'
		}
		console.log(this.props.selectedUser)
		return (
			<div style={messagePage}>
				<Threads users={this.props.users}/>
				<div></div>
				<Profile user={this.props.selectedUser}/>
			</div>
		)
	}
}

export default Messages
