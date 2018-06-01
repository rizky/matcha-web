import React, { Component } from 'react'
import { Nav, Footer } from './components'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Home, Discover, Login, Registration, Messages } from './pages'
import { connect } from 'react-redux'

export const UserContext = React.createContext();

class App extends Component {
	render() {
		let user = null
		console.log(this.props)
		return (
		<div>
			<Nav/>
			<UserContext.Provider value={user}>
				<Router>
				<main>
					<Route exact path='/' render={()=><Home photos={this.props.photos}/>} />
					<Route exact path='/discover' render={()=><Discover users={this.props.users}/>} />
					<Route exact path='/messages' render={()=><Messages users={this.props.users} selectedUser={this.props.selectedUser}/>} />
					<Route exact path='/account/login' render={()=><Login/>} />
					<Route exact path='/account/registration' render={()=><Registration/>} />
				</main>
				</Router>
			</UserContext.Provider>
			<Footer/>
		</div>
		)
	}
}

const mapStateToProps = (state) => {
	return state
}
  
export default connect(mapStateToProps)(App)