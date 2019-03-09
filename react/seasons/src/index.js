// Import React and ReactDom
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

// Create the react component

class App extends React.Component{
  /*
  constructor(props){
    super(props);

    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state ={ lat: null ,errMessage:''};
  }
  */

  // Initializing the state
state = { lat: null ,errMessage: ''};


  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
     (position) => {
       // we called setState!!!!
       this.setState({ lat:position.coords.latitude});
     },
      // Handling errors
     (err) => {
       this.setState({errMessage:err.message});
     }
   );
  }

  renderContent(){
    if(this.state.lat && !this.state.errMessage){
      return ( <div><h1><SeasonDisplay lat ={this.state.lat} /></h1></div>);
    }
    else if(!this.state.lat && this.state.errMessage){
      return ( <div><h1>Error: {this.state.errMessage}</h1></div>);
    }
    else{
      return <Loader  message ="Please accept the location request! "/>;
    }
  }

  // React says we have to define render
  render() {
     return(
       <div className="border-red">
       {this.renderContent()}
       </div>
     )

    }
}

// Show the component to the user
ReactDOM.render(<App />, document.querySelector('#root'));
