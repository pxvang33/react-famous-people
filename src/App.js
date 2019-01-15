import React, { Component } from 'react';
// Importing header and famouse component
import './App.css';
import Header from './components/header.js';
import Famous from './components/famous.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />

          <p>Enter Famous Person</p>

        <Famous />
      </div>
    );
  } // end render
} // end App

export default App;
