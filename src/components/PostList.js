import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import RenderList from './RenderList';

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    
    render() {

        const renderList = this.props.posts.map((post)=>(
            <RenderList post={post} key ={post.id} />
        ));

        return (
            <div>
                <div className="header">
                 <h2 className="text-center" style={{margin:"20px",
                 textShadow: "2px 2px 2px rgba(41, 41, 41, 0.26)",
                 fontSize:"3em",
                 color: "#3d3e48",
                 fontWeight: "600",
                 }}>
                 BLOGS APP</h2>
                </div> 
    

              <div className="ui segments" style={{backgroundColor:"#f6f6f6",margin:"30px"}}>
                <div className='ui relaxed divided list' style={{margin:"50px"}}>
                  {renderList}
              </div>
            </div>
        </div>
        )
    }
};

const mapStateToProps = (state) => {
   return { posts:state.posts }
};

export default connect(mapStateToProps,{ fetchPosts }) (PostList);
