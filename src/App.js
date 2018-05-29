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
						return <Route key={index} path={'/' + page.toLowerCase()} component={Pages[page]} />
					})
				}
			<Footer/>
		</div>
	</Router>
    );
  }
}

export default App;
