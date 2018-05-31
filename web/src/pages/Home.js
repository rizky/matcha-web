import React, { Component } from 'react';
import { Photos } from '../components'

class Home extends Component {	
	render() {
		return (
			<Photos photos={this.props.photos}/>
		);
	}
}

export default Home;
