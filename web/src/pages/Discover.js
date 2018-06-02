import React, { Component } from 'react'
import { Users } from '../components'

class Discover extends Component {
	render() {
		return (
			<Users {...this.props}/>
		)
	}
}

export default Discover
