import React,{Component} from 'react';
import UserHeader from './UserHeader';

class RenderList extends Component {
   
    render() {
        const post  = this.props.post; 
        return (
            // <div className="ui segment">
             <div className="item" key={post.id}> 
                <i className="large middle aligned icon user" />
                <div className="content">
                  <div className="description">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                  </div>
                  <UserHeader userId={post.userId} />
                </div>
            </div> 
            
            // </div>
            
        );
    }
};

export default  RenderList;