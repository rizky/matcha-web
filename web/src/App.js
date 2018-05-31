import React, { Component } from 'react';
import { Navigator, Footer } from './components'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './pages'
import { connect } from 'react-redux'

class App extends Component {
	render() {
		return (
		<Router>
			<div className="App">
				<Navigator/>
				<Route exact path='/' render={()=><Home photos={this.props.photos}/>} />
				<Footer/>
			</div>
		</Router>
		);
	}
}

const mapStateToProps = (state) => {
	return state
}
  
export default connect(mapStateToProps)(App)