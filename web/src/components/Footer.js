import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class Footer extends Component {
	render() {
		return (
			<footer>
				<Navbar className="navbar-fixed-bottom">
					<Nav pullRight>
						<NavItem eventKey={1} href="#">
							2018 @ Riz.ky
						</NavItem>
					</Nav>
				</Navbar>
			</footer>
		)
	}
}

export default Footer;