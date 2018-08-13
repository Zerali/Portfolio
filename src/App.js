import React, { Component } from 'react';
import './App.css';
import About from './components/about';

let pic = require('./resource/profile_pic.jpg');

class App extends Component {
  render() {
    return (
      <div className="App">
        <About picture={pic} />
      </div>
    );
  }
}

export default App;
