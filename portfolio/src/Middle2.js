import React from 'react';
import './basic.css';

class Middle2 extends React.Component {
  render() {
    return (
      <div >
        <div class="container-fluid">
           <div class="col-sm-12 middle">
            <div class="row ">
              <div class="col-sm-4  ">
                <div class="image ">
                  <img class="img-responsive " src={require('./image/P2.jpg')} />
                </div>
              </div>
              <div class="col-sm-6 ">

                <div class="header ">
                  <h3>ABOUT ME</h3>
                  <p>Lorem Ipsum is sim ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500 s.Lorem Ipsum is sim ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500 s.</p>

                  <p>Lorem Ipsum is sim ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500 s..</p>
                </div>
                <div class="sub-header">
                  <div class="col-sm-12">
                   <div class="row">
                     <div class="col-sm-6">
                       <h4><i class="fa fa-globe" aria-hidden="true" ></i>WEB DESIGN</h4>
                       <p>Lorem Ipsum is sim ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                       standard dummy text ever since the 1500 s.</p>
                     </div>
                     <div class="col-sm-6">
                       <h4><i class="fa fa-code" aria-hidden="true" ></i>GRAPHIC DESIGN</h4>
                       <p>Lorem Ipsum is sim ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                       standard dummy text ever since the 1500 s.</p>
                     </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6">
                        <h4><i class="fa fa-magnet" aria-hidden="true"></i>UI/UX</h4>
                         <p>Lorem Ipsum is sim ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                         standard dummy text ever since the 1500 s.</p>
                      </div>
                      <div class="col-sm-6">
                        <h4><i class="fa fa-mobile" aria-hidden="true" ></i>APP DEVELOPMENT</h4>
                        <p>Lorem Ipsum is sim ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500 s.</p>
                      </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    )
  }
};



export default Middle2;
