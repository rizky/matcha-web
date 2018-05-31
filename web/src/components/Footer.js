import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="author">
				</div>
				<div className="author">
					<a href="http://www.riz.ky" target="_blank" rel="noopener noreferrer">
						<i className="far fa-copyright fa-flip-horizontal"></i> 2018 riz.ky
					</a>
				</div>
				<div className="github">
					<a href="https://github.com/rizkyario/42-matcha" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-github"></i>
					</a>
				</div>
			</footer>	
		)
	}
}

export default Footer;