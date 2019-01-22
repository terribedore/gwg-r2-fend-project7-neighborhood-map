import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Frugal Date Ideas</h1>
        <h5 className="App-desc">Free or Cheap Places to be with Your Honey.</h5>
        </header>
        <Map/>
      </div>
    );
  }
}

export default App;
