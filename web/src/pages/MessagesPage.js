import React, { Component } from 'react'
import { Threads, Messages,  Profile } from '../components'
import './MessagesPage.css'

export default class MessagesPage extends Component {
	render() {		
		const { threads, messages, selectedThread, userContext } = this.props
		const user = (selectedThread) ? selectedThread.user2: null
		return (
			<div className='messages-page'>
				<Threads threads={threads} userContext={userContext}/>
				<Messages messages={messages} selectedThread={selectedThread} userContext={userContext}/>
				<Profile user={user}/>
			</div>
		)
	}
}