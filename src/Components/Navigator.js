import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

class Footer extends Component {
	render() {
		return (
			<header className="App-header">
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand><a href="/">Matcha</a></Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem href="/">Home</NavItem>
						<NavItem href="/discover">Discover</NavItem>
						<NavItem href="/messages">Messages</NavItem>
					</Nav>
					<Nav pullRight>
						<NavItem href="/notification">Notification</NavItem>
						<NavDropdown id="navigator" title="Account">
							<MenuItem href="/profile">Profile</MenuItem>
							<MenuItem href="/settings">Settings</MenuItem>
							<MenuItem divider />
							<MenuItem href="/logout">Log out</MenuItem>
						</NavDropdown>
					</Nav>
				</Navbar>				
			</header>
		)
	}
}

export default Footer;