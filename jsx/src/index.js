// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const buttonText = {type: "clickMe!"}
  const labelText = {type: "Enter Name"}
  return (
    <div>
     <h1 style= {{color: "red"}}>Good Morning!!</h1>
     <p style= {{color: "blue"}}>Myself Prerna Pundir</p>
     <button style = {{backgroundColor: "blue", colo: "white"}}>{buttonText.type}</button><br></br>
     <label className ="label" for ="name">{labelText.type}</label>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
