import React, { Component } from 'react'
import { Nav, Footer } from './components'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Home, Discover, Login, Logout, Registration, Messages } from './pages'
import { connect } from 'react-redux'

export const UserContext = React.createContext();

class App extends Component {
	render() {
		return (
		<div>
			<Router>
				<UserContext.Provider value={this.props.userContext}>
					<Nav/>
					<main>
						<Route exact path='/' render={()=><Home photos={this.props.photos}/>} />
						<Route exact path='/discover' render={()=><Discover users={this.props.users}/>} />
						<Route exact path='/messages' render={()=><Messages users={this.props.users} selectedUser={this.props.selectedUser}/>} />
						<Route exact path='/account/login' render={()=><Login/>} />
						<Route exact path='/account/logout' render={()=><Logout/>} />
						<Route exact path='/account/registration' render={()=><Registration/>} />
					</main>
					<Footer/>
				</UserContext.Provider>
			</Router>
		</div>
		)
	}
}

const mapStateToProps = (state) => {
	return state
}
  
export default connect(mapStateToProps)(App)