import React, { Component } from 'react'
import { Nav, Footer } from './components'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Home, Discover, Login, Registration } from './pages'
import { connect } from 'react-redux'

class App extends Component {
	render() {
		return (
		<div>
		<Nav/>
		<Router>
		<main>
			<Route exact path='/' render={()=><Home photos={this.props.photos}/>} />
			<Route exact path='/discover' render={()=><Discover users={this.props.users}/>} />
			<Route exact path='/account/login' render={()=><Login/>} />
			<Route exact path='/account/registration' render={()=><Registration/>} />
		</main>
		</Router>
		<Footer/>
		</div>
		)
	}
}

const mapStateToProps = (state) => {
	return state
}
  
export default connect(mapStateToProps)(App)