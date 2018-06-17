import React, { Component } from 'react'
import { Threads, Messages,  Profile } from '../components'
import { dispatch } from '../index'
import * as ThreadActions from '../redux/actions/thread'
import * as MessageActions from '../redux/actions/message'
import './MessagesPage.css'

export default class MessagesPage extends Component {
	componentDidMount() {
		const { userContext, selectedThread, threads } = this.props
		if (userContext) dispatch(ThreadActions.loadThreads(userContext.id))
		if (selectedThread == null && threads.length > 0)
		{
			dispatch(ThreadActions.selectThread(threads[0]))
			dispatch(MessageActions.loadMessages(threads[0].id))
		}
	}

	componentDidUpdate() {
		const { userContext } = this.props
		if (userContext) dispatch(ThreadActions.loadThreads(userContext.id))
	}

	render() {		
		const { threads, messages, selectedThread, userContext } = this.props
		const user = (selectedThread) ? selectedThread.user2: null
		return (
			<div className='messages-page'>
				<Threads threads={threads}/>
				<Messages messages={messages} selectedThread={selectedThread} userContext={userContext}/>
				<Profile user={user}/>
			</div>
		)
	}
}