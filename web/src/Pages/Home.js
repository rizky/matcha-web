import React, { Component } from 'react';
import { Photos } from '../Components'

class Home extends Component {	
	render() {
		var photo = {
			id: `0000000001`,
			url: `https://user-images.githubusercontent.com/6814254/40547072-32b917cc-6031-11e8-8aa3-07d0353793ee.jpg`,
		}
		return (
			<Photos/>
		);
	}
}

export default Home;
