import React, {Component} from 'react';

class NewSingle extends Component {
    render() {
    
     return(
        
         
         <div className="col s4">
           <div className="card">
             <div className="card-image">
               <img src={this.props.item.urlToImage}  />
               {/* <span className="card-title">{this.props.item.source.name}</span> */}
            </div>
             <div className="card-content">
               <p>{this.props.item.title}</p>
             </div>
             <div className="card-action">
               <a href={this.props.item.url} target="_blank">Full article</a>
             </div>
           </div>
         </div>
       
                 
       
     )
    }
};

export default NewSingle;