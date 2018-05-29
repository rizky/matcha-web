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
				<Route exact path='/' component={Pages.Home} />
				<Route exact path='/discover' component={Pages.Discover} />
				<Route exact path='/messages' component={Pages.Messages} />
				<Route exact path='/notification' component={Pages.Notification} />
				<Route exact path='/profile' component={Pages.Profile} />
				<Route exact path='/settings' component={Pages.Settings} />
				<Route exact path='/logout' component={Pages.Logout} />
			<Footer/>
		</div>
	</Router>
    );
  }
}

export default App;
