import React, { Component } from 'react';
import { selectSong } from '../actions';
import { deselectSong } from '../actions';
import {connect} from 'react-redux';

class SongsCard extends Component {
    render() {
       
        const song = this.props.song;
        
        return (
            <div className='item' key={song.title}>
                 <div className='right floated content'>
                   <button 
                     className="ui button primary" 
                     onClick={()=>this.props.selectSong(song)}
                     >Select
                   </button>
                   </div>

                 <div className='right floated content'>
                   <button 
                     className="ui button primary" 
                     onClick={()=>this.props.deselectSong(song)}
                     >Deselect
                   </button>
                   
                 </div>
                  <div className="content"><h2>{song.title}</h2></div>
                </div>
        )
    }
};




export default connect(null,{selectSong,deselectSong})(SongsCard);