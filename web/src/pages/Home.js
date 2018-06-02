import React, { Component } from 'react'
import { Photos } from '../components'

class Home extends Component {	
	render() {
		return (
			<Photos {...this.props}/>
		)
	}
}

export default Home