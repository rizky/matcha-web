import React, { Component } from 'react'
import { Threads } from '../components'

class Messages extends Component {
	render() {
		return (
			<Threads users={this.props.users}/>
		)
	}
}

export default Messages
