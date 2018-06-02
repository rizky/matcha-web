import React, { Component } from 'react'
import './Photo.css'
import { Link } from 'react-router-dom'

export default class Message extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			show: false
		}
	}

	render () {
		const {message} = this.props
		return (
			<div className="message" id="message_{{message.id}}">
				<span className="user">{message.from} </span>
				<span style={{width: '96%'}}>{message.message}</span>
			</div>
		)
	}
}