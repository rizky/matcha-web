import React, { Component } from 'react'
import { Threads, Messages,  Profile } from '../components'
import { dispatch } from '../index'
import * as ThreadActions from '../redux/actions/thread'
import * as MessageActions from '../redux/actions/message'
import PropTypes from 'prop-types';

export default class MessagesPage extends Component {
	componentDidMount() {
		if (this.props.userContext)
			dispatch(ThreadActions.loadThreads(this.props.userContext.id))
	}

	componentDidUpdate() {
		if (this.props.selectedThread == null)
		{
			if (this.props.threads.length > 0)
			{
				dispatch(ThreadActions.selectThread(this.props.threads[0]))
				dispatch(MessageActions.loadMessages(this.props.threads[0].id))
			}
		}
	}

	render() {
		const messagePage = {
			display: 'grid',
			gridTemplate: '1fr / min-content auto min-content',
			width: '100%',
			height: 'calc(100vh - 125px)'
		}
		
		const { threads, messages, selectedThread } = this.props
		const user = (selectedThread) ? selectedThread.user2: null
		return (
			<div style={messagePage}>
				<Threads threads={threads}/>
				<Messages messages={messages}/>
				<Profile user={user}/>
			</div>
		)
	}
}

Messages.propTypes = {
	threads: PropTypes.array.isRequired,
	messages: PropTypes.array.isRequired,
	selectedThread: PropTypes.object.isRequired
};
