import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DropZoneComp from './components/DropZoneComp'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <div className="container">
            <DropZoneComp/>
          </div>
      </div>
    );
  }
}

export default App;
