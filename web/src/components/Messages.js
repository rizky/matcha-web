import React, { Component } from 'react'
import { Message } from '../components'
import './Message.css'
import { dispatch } from '../index'
import * as MessageActions from '../redux/actions/message'

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
			const { selectedThread } = this.props

			this.setState({
				message: ''
			})
			dispatch(MessageActions.loadMessages(selectedThread.id))
		}
	}

	render () {
		var { messages } = this.props
		if (messages == null)
			return (<div></div>)
		messages = this.props.messages.map ( message => {
			if (message.from.id !== this.props.userContext.id && message.match.data[0])
				return null
			return <Message key={message.id} message={message}/>
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