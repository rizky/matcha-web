import React, { Component } from 'react'
import { Users } from '../components'

class Discover extends Component {
	render() {
		return (
			<Users users={this.props.users}/>
		)
	}
}

export default Discover
