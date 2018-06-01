import React, { Component } from 'react'
import { Photos } from '../components'
import { UserContext } from '../App'
class Home extends Component {	
	render() {
		return (
			<Photos photos={this.props.photos}/>
		)
	}
}

export default React.forwardRef((props, ref) => (
	<UserContext.Consumer>
		{user => <Home {...props} userContext={user} ref={ref}/>}
	</UserContext.Consumer>
));