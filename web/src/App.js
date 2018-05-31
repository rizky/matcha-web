import React, { Component } from 'react';
import { Navigator, Footer } from './components'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './pages'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './redux/actions'

class App extends Component {
	render() {
		return (
		<Router>
			<div className="App">
				<Navigator/>
					{/* {
						Object.keys(Pages).map((page, index) => {
							let path = (page.toLowerCase() === 'home') ? '/' : '/' + page.toLowerCase();
							return <Route key={index} exact path={path} component={Pages[page]} />
						})
					} */}
					<Route exact path='/' render={()=><Home photos={this.props.photos}/>} />
				<Footer/>
			</div>
		</Router>
		);
	}
}

function mapStateToProps(state) {
	return state
}
  
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}
  
export default connect(mapStateToProps, mapDispatchToProps)(App)