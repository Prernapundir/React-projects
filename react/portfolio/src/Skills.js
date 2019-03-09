import React from 'react';
import './basic.css';
class Skills extends React.Component {
  render() {
    return (
      <div class="skills">
       <div class="container">
        <div class="col-sm-12">
          <div class="row">

           <div class="col-sm-6">
             <div class="header">
               <h3>EXPERIENCE</h3><hr style={{marginRight:"500px"}}/>
                 <p>Lorem Ipsum is sim ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                   standard dummy text ever since the 1500 s.
                 </p>
                 <p>Lorem Ipsum is sim ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                   standard dummy text ever since the 1500 s.
                 </p>
               <div class="button">
                 <a href="https://www.linkedin.com/in/iamprerna/" ><button type="button" class="btn btn-default" >CONTACT ME</button></a>
               </div>
             </div>
           </div>

           <div class="col-sm-3">
             <h4>JAVASCRIPT</h4>
              <div class="progress">
               <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                    aria-valuemax="100" style={{width:"70%"}}> 70%
               </div>
              </div>

              <h4>REACT/NODE/REDUX</h4>
               <div class="progress">
                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                     aria-valuemax="100" style={{width:"50%"}}> 50%
                </div>
               </div>

                <h4>C</h4>
                 <div class="progress">
                  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                       aria-valuemax="100" style={{width:"40%"}}> 40%
                  </div>
                 </div>

                </div>

                <div class="col-sm-3">
                  <h4>SQL/MONGODB</h4>
                   <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                         aria-valuemax="100" style={{width:"70%"}}> 70%
                    </div>
                   </div>

                   <h4>PHOTOSHOP</h4>
                    <div class="progress">
                     <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                          aria-valuemax="100" style={{width:"60%"}}> 60%
                     </div>
                    </div>

                     <h4>HTML/CSS/BOOTSTRAP</h4>
                      <div class="progress">
                       <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                            aria-valuemax="100" style={{width:"80%"}}> 80%
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

export default Skills;
