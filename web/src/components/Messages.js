import React, { Component } from 'react'
import { Message } from '../components'
import './Message.css'
import { dispatch } from '../index'
import * as MessageActions from '../redux/actions/message'
import * as ThreadActions from '../redux/actions/thread'
import * as NotificationActions from '../redux/actions/notification'
import moment from 'moment'

export default class Messages extends Component {
	constructor(props) {
		super(props);
		this.state = {message: ''};
	}

	handleChange = (e) => {
		this.setState({
			message: e.target.value
		})
	}

	sendMessage = (e) => {
		if (e.key === 'Enter') {
			const { selectedThread, userContext } = this.props
			this.setState({
				message: ''
			})
			let message = {
				thread: selectedThread,
				message: e.target.value,
				from: userContext,
				to: userContext.id === selectedThread.user1 ? selectedThread.user2: selectedThread.user1,
				match: false,
				read: false,
				createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
			}
			dispatch(MessageActions.addMessage(message))
			selectedThread.lastMessage = message
			dispatch(ThreadActions.selectThread(selectedThread))
		}
	}

	componentWillUpdate() {
		var { messages } = this.props
		messages.forEach ( message => {
			if (!message.read)
			{
				dispatch(NotificationActions.readNotification(message.id))
				dispatch(MessageActions.readMessage(message.id))
			}
		})
	}
	
	render () {
		var { messages, userContext } = this.props
		if (messages == null)
			return (<div></div>)
		messages = messages.map ( message => {
			if (!message.read)
				dispatch(NotificationActions.readNotification(message.id))
			if (message.from.id !== userContext.id && message.match)
				return null
			return <Message key={Math.random()} message={message}/>
		})
		return (
			<div className='messagesPane'>
				<div className='messages'>{messages}</div>
				<div className='messages'>
				<input placeholder='Write message...' 
					className='message-text' 
					value={this.state.message} 
					onChange={this.handleChange} 
					onKeyPress={this.sendMessage}/>
				</div>
			</div>
		)
	}
}