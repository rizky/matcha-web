import React, { Component } from 'react'
import { Thread } from '../components'
import './Threads.css'
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
		if (!this.props.threads)
			return null
		let threads = this.props.threads.map ( thread => {
			return (<Thread key={thread.id} user={thread.user2} onClick={() => this.selectThread(thread)} />)
		})
		return (
			<div className='threads'>{threads}</div>
		)
	}
}

Threads.propTypes = {
	threads: PropTypes.array.isRequired,
};
