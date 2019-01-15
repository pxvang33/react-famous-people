import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
                  famousPerson: 'Jet Li', 
                  role: 'Master'
      } // end state
  } // end constructor
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Famous People App
          </p>

          <p>{this.state.famousPerson} is a famous {this.state.role}.</p>
        </header>
      </div>
    );
  }
}

export default App;
