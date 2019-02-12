import React from 'react';

class Images extends React.Component {
    render() {
        console.log(this.props);
        return (
               
          <div class="container-fluid">
            <h4 style={{backgroundColor:'lightgrey'}}>{this.props.item.title}</h4>
          </div>
            
        )
    }
}

export default Images;