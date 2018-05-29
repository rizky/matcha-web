import React, { Component } from 'react';
import Footer from './Components/Footer'
import Navigator from './Components/Navigator'

class App extends Component {
  render() {
    return (
      <div className="App">
	  	<Navigator/>
        <p className="App-intro">
		    To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<Footer/>
      </div>
    );
  }
}

export default App;
