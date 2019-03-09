import React from 'react';

class Button extends React.Component {
  state = { term: ''};

  onButtonClick = (event) => {
     this.setState({term:event.target.value});
  };

  render() {


    return (
      <div style={{textAlign:"center"}} className="ui segment">
         <h1><b>What do you think of React?</b></h1>
         <button
           className="ui button"
           value="great"
           onClick={this.onButtonClick}
         >
           Great
           </button>
         <button
           className="ui button"
           value="amazing"
           onClick={this.onButtonClick}
          >
            Amazing
          </button>
          <div><h2>{this.state.term}</h2></div>
      </div>

    );
  }
};

export default Button;
