import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

class Footer extends Component {
	render() {
		return (
			<header className="App-header">
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand><a href="#home">Matcha</a></Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem eventKey={1} href="#">Home</NavItem>
						<NavItem eventKey={1} href="#">Discover</NavItem>
						<NavItem eventKey={1} href="#">Messages</NavItem>
					</Nav>
					<Nav pullRight>
						<NavItem eventKey={1} href="#">Notification</NavItem>
						<NavDropdown eventKey={3} title="Account">
							<MenuItem eventKey={3.1}>Profile</MenuItem>
							<MenuItem eventKey={3.2}>Settings</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.4}>Log out</MenuItem>
						</NavDropdown>
					</Nav>
				</Navbar>
			</header>
		)
	}
}

export default Footer;