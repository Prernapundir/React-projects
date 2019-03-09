import React, {Component} from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

class App extends Component {
  render() {
    
    return (
      <div >
        <div className=" header" style={{paddingLeft:"800px",paddingTop:'100px'}}>
        <h2 className="ui icon header">
         <i className="music icon"></i>
         <div className="content">Songs-App</div>
        </h2>
     </div>
      <div className='ui container grid placeholder segment' style={{margin:"100px"}}>
       
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div className="column eight wide ">
            <SongDetail />
          </div>
        </div>
      </div>
      </div>
    )
  }
};

export default App;
