import React, { Component } from 'react'
import { Message } from '../components'
import './Message.css'

export default class Messages extends Component {
	render () {
		if (this.props.messages == null)
			return (<div></div>)
		let messages = this.props.messages.map ( message => {
			return <Message key={message.id} message={message}/>
		})
		return <div className='messages'>{messages}</div>
	}
}