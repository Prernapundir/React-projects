import React, { Component } from 'react';
import App2 from './Api/App2';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1> Social-media-app</h1> 
        </header>
        <App2 />
      </div>
    );
  }
}

export default App;
