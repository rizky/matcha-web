import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import FontAwesome from '@fortawesome/fontawesome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
					<a href="#home">Matcha</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav pullRight>
					<NavDropdown eventKey={3} title="Account">
						<MenuItem eventKey={3.1}>Profile</MenuItem>
						<MenuItem eventKey={3.2}>Settings</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={3.4}>Log out</MenuItem>
					</NavDropdown>
				</Nav>
			</Navbar>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<footer>
			<Navbar className="navbar-fixed-bottom">
				<Nav pullRight>
					<NavItem eventKey={1} href="#">
						2018 @ Riz.ky
					</NavItem>
				</Nav>
			</Navbar>
		</footer>
      </div>
    );
  }
}

export default App;
