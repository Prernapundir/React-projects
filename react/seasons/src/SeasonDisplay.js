// Import React and ReactDom
import React from 'react';
import ReactDOM from 'react-dom';
import './SeasonDisplay.css';

const SeasonConfig ={
  summer:{
    text:"Lets hit the beach",
    iconName:'sun'
  },
  winter:{
    text:'Burr,it is chilly',
    iconName:'snowflake'
  }
}

const getSeason = (lat, month) =>{
  if(month > 2 && month < 9){
    return lat > 0 ?  'summer' : 'winter';
  }
  else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

// Create the react component
const SeasonDisplay = (props) =>{
  const season = getSeason(props.lat, new Date().getMonth());
  const {text,iconName} = SeasonConfig[season];
return  (
    <div className ={`season-display ${season}`}>
      <i className = {` icon-left huge ${iconName} icon`} />
      <h1>{text}</h1>
      <i className = {` icon-right huge ${iconName} icon`} />
    </div>
);

};


// Show the component to the user
ReactDOM.render(<SeasonDisplay />, document.getElementById('root'));

export default SeasonDisplay;
