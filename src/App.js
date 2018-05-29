import React, { Component } from 'react';
import Footer from './Components/Footer'
import Navigator from './Components/Navigator'
import * as Pages from './Pages'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
		<Router>
			<div className="App">
				<Navigator/>
					{
						Object.keys(Pages).map((page, index) => {
							let path = (page.toLowerCase() === 'home') ? '/' : '/' + page.toLowerCase();
							return <Route key={index} exact path={path} component={Pages[page]} />
						})
					}
				<Footer/>
			</div>
		</Router>
		);
	}
}

export default App;
