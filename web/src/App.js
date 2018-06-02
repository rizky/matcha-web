import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Home, Discover, Login, Logout, Registration, MessagesPage, Nav, Footer } from './pages'
import { connect } from 'react-redux'

export const UserContext = React.createContext();

class App extends Component {
	render() {
		const { userContext, photos, users } = this.props
		return (
		<div>
			<Router>
				<UserContext.Provider value={userContext}>
					<Nav/>
					<main>
						<Route exact path='/' render={()=><Home photos={photos}/>} />
						<Route exact path='/discover' render={()=><Discover users={users}/>} />
						<Route exact path='/messages' render={()=><MessagesPage {...this.props} />} />
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