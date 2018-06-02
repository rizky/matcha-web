import React, { Component } from 'react'
import './Nav.css'
import { UserContext } from '../App'

class Nav extends Component {
	render() {
		console.log(this.props)
		return (
			<header>
				<ul className="nav">
					<li>
						<a href="/">
							<i className="fa fa-home"></i>
							<span className="nav-text">Home</span>
						</a>
					</li>
					<li>
						<a href="/discover">
							<i className="far fa-compass"></i>
							<span className="nav-text">Discover</span>
						</a>
					</li>
					<li>
						<a href="/messages">
							<i className="far fa-envelope"></i>
							<span className="nav-text">Messages</span>
						</a>
					</li>
					<li className="nav_logo">
						<i className="fas fa-leaf"></i>
						<span>Matcha</span>
					</li>
					<li className="nav_spacing"></li>
					<li>
						<a href="/notification">
							<i className="fa fa-bell"></i>
							<span className="nav-text">Notification</span>
						</a>
					</li>
					<li className="nav_account">
						<a href="/account">
							<span><i className="fas fa-user-circle"></i>
								<span className="nav-text">{this.props.userContext ? this.props.userContext.name : 'Account'}</span>
							</span>
						</a>	
						<ul className="ani">
							<li><a href="/account/login">Login</a></li>
							<li><a href="/account/registration">Register</a></li>
						</ul>
					</li>
				</ul>
			</header>
		)
	}
}

export default React.forwardRef((props, ref) => (
	<UserContext.Consumer>
		{user => <Nav {...props} userContext={user} ref={ref}/>}
	</UserContext.Consumer>
));