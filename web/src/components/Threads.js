import React, { Component } from 'react'
import { Thread } from '../components'
import './Thread.css'
import { dispatch } from '../index'
import * as ThreadActions from '../redux/actions/thread'
import * as MessageActions from '../redux/actions/message'
import PropTypes from 'prop-types';

export default class Threads extends Component {
	selectThread = (thread) => {
		dispatch(ThreadActions.selectThread(thread))
		dispatch(MessageActions.loadMessages(thread.id))
	}

	render () {
		if (this.props.threads.length === 0)
			return <div></div>
		let threads = this.props.threads.map ( thread => {
			if (!thread.lastMessage.match.data[0])
				return (<Thread key={thread.id} user={thread.user2} type={1} lastMessage={thread.lastMessage} onClick={() => this.selectThread(thread)} />)
			else
				return null
		})
		let matches = this.props.threads.map ( thread => {
			if (thread.lastMessage.match.data[0])
				return (<Thread key={thread.id} user={thread.user2} lastMessage={thread.lastMessage} onClick={() => this.selectThread(thread)} />)
			else
				return null
		})
		matches = matches.filter(function(n){ return n !== null });
		console.log(matches);
		return (
			<div className='threadsPane'>
				{
				matches.length > 0
				? <div className='threads'>
					<div className='matches'>
						{
							matches
						}
					</div>
				</div>
				: null
				}
				<div className='threads'>{threads}</div>
			</div>
		)
	}
}

Threads.propTypes = {
	threads: PropTypes.array.isRequired,
};
