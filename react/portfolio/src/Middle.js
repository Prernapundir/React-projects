import React from 'react';
import './basic.css';

class Middle extends React.Component {
  render() {
    return (
      <div>
        <div class="container ">
          <div class="col-sm-12 ">
            <div class="row">
             <div class="col-sm-4">
              <h3  >VALUES</h3><hr />
               <p>Lorem Ipsum is sim ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
               standard dummy text ever since the 1500 s.</p>
             </div>
             <div class="col-sm-4">
              <h3>GOALS</h3><hr/>
               <p>Lorem Ipsum is sim ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
               standard dummy text ever since the 1500 s.</p>
             </div>
             <div class="col-sm-4">
              <h3>HOBBIES</h3><hr />
               <p>Lorem Ipsum is sim ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
               standard dummy text ever since the 1500 s.</p>
             </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Middle;
