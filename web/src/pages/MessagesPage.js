import React, { Component } from 'react'
import { Threads, Messages,  Profile } from '../components'
import { dispatch } from '../index'
import * as ThreadActions from '../redux/actions/thread'
import * as MessageActions from '../redux/actions/message'
import './MessagesPage.css'

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
		const { threads, messages, selectedThread } = this.props
		const user = (selectedThread) ? selectedThread.user2: null
		return (
			<div className='messages-page'>
				<Threads threads={threads}/>
				<Messages messages={messages} selectedThread={selectedThread} userContext={this.props.userContext}/>
				<Profile user={user}/>
			</div>
		)
	}
}