import React, { Component } from 'react'
import { Thread } from '../components'
import './Threads.css'
import { dispatch } from '../index'
import * as UserActions from '../redux/actions/user'
import PropTypes from 'prop-types';

export default class Threads extends Component {
	selectUser = (user) => {
		dispatch(UserActions.selectUser(user))
	}

	render () {
		console.log(this.props);
		
		if (!this.props.threads)
			return null
		let threads = this.props.threads.map ( thread => {
			return (<Thread key={thread.id} user={thread.user2} onClick={() => this.selectUser(thread.user2)} />)
		})
		return (
			<div className='threads'>{threads}</div>
		)
	}
}

Threads.propTypes = {
	threads: PropTypes.array.isRequired,
};
