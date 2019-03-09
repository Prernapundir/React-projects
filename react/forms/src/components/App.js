import React from 'react';
import SignUp from './SignUp';
import Button from './Button';

class App extends React.Component {


render() {
    return (
     <div className="ui container">
      <Button  />
      <SignUp />
     </div>
    );
  }
};

export default App;
