import React, { Component } from 'react'
import './Thread.css'

export default class Thread extends Component {
	render () {
		const { user, onClick, lastMessage } = this.props
		const message = (lastMessage !== null) ? lastMessage.message : null
		return (
			<div className='thread' id={`user_${user.id}`} onClick={onClick}>
				<img className='profile_picture circled' src={user.picture} alt=''/>
				<div className='thread_preview'>
					<span className='h1'>{user.name} </span>
					<span className='h2'>{message}</span>
				</div>
			</div>
		)
	}
}