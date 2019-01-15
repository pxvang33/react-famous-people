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
changePerson = (event) =>{
  console.log(event.target.value);
  this.setState({
    famousPerson: event.target.value,
    // role: event2.target.value


  });
} // end changePerson

changeRole = (event) => {
  console.log(event.target.value);
  this.setState({
    role: event.target.value,
  });
} //end changeRole

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Famous People App
          </p>

          <p>Enter Famous Person</p>
        <input onChange={this.changePerson} type="text" placeholder="Famous Person"></input>
        <br/>
        <input onChange={this.changeRole} type="text" placeholder="Role"></input>
          <p>{this.state.famousPerson} is a famous {this.state.role}.</p>
        </header>
      </div>
    );
  } // end render
} // end App

export default App;
