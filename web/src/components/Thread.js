import React, { Component } from 'react'
import './Thread.css'

export default class Thread extends Component {
	render () {
		const { user, onClick, lastMessage, type } = this.props
		const message = (lastMessage !== null) ? lastMessage.message : null
		if (type === 1)
			return (
				<div className='thread' id={`user_${user.id}`} onClick={onClick}>
					<div style={{position: 'relative'}}>
						<img className='profile_picture circled' src={user.picture} alt=''/>
						{
						!lastMessage.read
						? <i className="fas fa-circle" style={{position: 'absolute', top: '28px', right: '-8px', padding: '0px', color: '#fd3575'}}></i>
						: null
						}
					</div>
					<div className='thread_preview'>
						<span className='h1'>{user.name} </span>
						<span className='h2'>{message}</span>
					</div>
				</div>
			)
		else
			return (
				<div className='thread' id={`user_${user.id}`} onClick={onClick}>
					<div style={{position: 'relative'}}>
						<img className='profile_picture circled' src={user.picture} alt=''/>
						{
						!lastMessage.read
						? <i className="fas fa-circle" style={{position: 'absolute', top: '28px', right: '-8px', padding: '0px', color: '#fd3575'}}></i>
						: null
						}
					</div>
				</div>
			)
	}
}
