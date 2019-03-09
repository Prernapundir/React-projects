import React, { Component } from 'react';
import News from './News/News';
import './App.css';

class App extends Component {

  state = { 
    news1 : {
        type:'top-headlines',
        query:'sources=bbc-news'
    },
    news2: {
        type:'everything',
        query:'q=bitcoin'
    }
};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>News-App</h1>
        </header>
        <News news={this.state.news1} />
        <News news={this.state.news2} />
      </div>
    );
  }
}

export default App;
