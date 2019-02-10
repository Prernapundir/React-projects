import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Middle from './Middle';
import Middle2 from './Middle2';
import Skills from './Skills';


class App extends React.Component {
  render() {
    return (
      <div>
       <Navbar />
       <Middle />
       <Middle2 />
       <Skills />
      </div>
    )
  }
};

const location = document.querySelector('#root');
ReactDOM.render(<App />, location);
