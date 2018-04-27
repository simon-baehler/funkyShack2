import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DropZoneComp from './components/DropZoneComp'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="nav">
            <div className="nav-container">
                <div className="nav-items">
                    <a className="nav-item" href="https://funky-emu.net"> <img src="/img/logo.png" alt="Mountain View"/></a>
                  <a className="nav-item linknav hvr-fade" href="https://funky-emu.net">Funky-emu</a>
                  <a className="nav-item linknav hvr-fade" href="https://funky-emu.net">Galerie</a>
                  <a className="nav-item linknav hvr-fade" href="https://funky-emu.net">upload</a>
              </div>
            </div>
          </div>
          <div className="container">
            <DropZoneComp/>
          </div>
      </div>
    );
  }
}

export default App;
