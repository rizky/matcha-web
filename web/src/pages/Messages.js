import React, { Component } from 'react'
import { Threads, Profile } from '../components'
import { dispatch } from '../index'
import * as ThreadAction from '../redux/actions/thread'
import * as UserActions from '../redux/actions/user'
import PropTypes from 'prop-types';

class Messages extends Component {
	componentDidMount() {
		console.log(this.props);
		if (this.props.userContext)
			dispatch(ThreadAction.loadThreads(this.props.userContext.id))
	}

	componentDidUpdate() {
		if (this.props.threads.length > 0 && this.props.selectedUser == null)
			dispatch(UserActions.selectUser(this.props.threads[0].user2))
	}

	render() {
		const messagePage = {
			display: 'grid',
			gridTemplate: '1fr / min-content auto min-content',
			width: '100%',
			height: 'calc(100vh - 125px)'
		}
		
		const { threads } = this.props
		return (
			<div style={messagePage}>
				<Threads threads={threads}/>
				<div></div>
				<Profile user={this.props.selectedUser}/>
			</div>
		)
	}
}

Messages.propTypes = {
	threads: PropTypes.array.isRequired,
	selectedUser: PropTypes.object.isRequired
};

export default Messages
