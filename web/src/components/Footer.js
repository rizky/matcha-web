import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './Footer.css'

class Footer extends Component {
	render() {
		return (
			<footer>
				<div class="author">
				</div>
				<div class="author">
					<a href="http://www.riz.ky" target="_blank">
						<i class="far fa-copyright fa-flip-horizontal"></i> 2018 riz.ky
					</a>
				</div>
				<div class="github">
					<a href="https://github.com/rizkyario/42-matcha" target="_blank">
						<i class="fab fa-github"></i>
					</a>
				</div>
			</footer>	
		)
	}
}

export default Footer;