import React, { Component } from 'react'
import './Nav.css'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'

class Nav extends Component {
	render() {
		const { userContext, notifications } = this.props
		let newNotifications = notifications.reduce((a, b) => !b.read ? 1 + a : a, 0)
		newNotifications = newNotifications === 0 ? null : `(${newNotifications})`
		return (
			<header>
				<ul className="nav">
					<li>
						<Link to="/">
							<i className="fa fa-home"></i>
							<span className="nav-text">Home</span>
						</Link>
					</li>
					<li>
						<Link to="/discover">
							<i className="far fa-compass"></i>
							<span className="nav-text">Discover</span>
						</Link>
					</li>
					<li>
						<Link to="/messages">
							<i className="far fa-envelope"></i>
							<span className="nav-text">Messages</span>
						</Link>
					</li>
					<li className="nav_logo">
						<i className="fas fa-leaf"></i>
						<span>Matcha</span>
					</li>
					<li className="nav_spacing"></li>
					<li>
						<Link to="/notification">
							<i className="fa fa-bell"></i>
							<span className="nav-text">Notification{newNotifications}</span>
						</Link>
					</li>
					{ (userContext)
					? (<li className="nav_account">
						<Link to="/account">
							<span><i className="fas fa-user-circle"></i>
								<span className="nav-text">{userContext ? userContext.username : 'Account'}</span>
							</span>
						</Link>	
						<ul className="ani">
							<li><Link to="/account/">Profile</Link></li>
							<li><Link to="/account/settings">Settings</Link></li>
							<li><Link to="/account/logout">Logout</Link></li>
							<div className='handler'></div>
						</ul>
					</li>)
					: (<li className="nav_account">
						<Link to="/account">
							<span><i className="fas fa-user-circle"></i>
								<span className="nav-text">{userContext ? userContext.username : 'Account'}</span>
							</span>
						</Link>	
						<ul className="ani">
							<li><Link to="/account/login">Login</Link></li>
							<li><Link to="/account/registration">Register</Link></li>
							<div className='handler'></div>
						</ul>
					</li>)
					}
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