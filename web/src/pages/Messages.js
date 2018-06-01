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
			width: '100%',
			height: 'calc(100vh - 125px)'
		}
		if (this.props.users.length > 0 && this.props.selectedUser == null)
			dispatch(UserActions.selectUser(this.props.users[0]))
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
