import React from 'react';
import './basic.css';

class Navbar extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
           <div class="navbar-header header " style={{marginLeft:"40px"}}>
              <a class="navbar-brand " href="#">Prerna</a>
           </div>
          <div class="tabs">
           <ul class="nav navbar-nav navbar-right">
             <li class="active"><a href="#">HOME</a></li>
             <li><a  href="#">ABOUTME </a></li>
             <li><a href="#"> SKILLS</a></li>
             <li><a href="#">RESUME </a></li>
             <li><a href="#">TESTIMONIALS</a></li>
             <li><a href="#">PORTFOLIO </a></li>
             <li><a href="#">CONTACTME</a></li>
          </ul>
        </div>
     </div>
  </nav>
</div>
    )
  }
};

export default Navbar;
