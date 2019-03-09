import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongsCard from './SongsCard';

class SongList extends Component {
    render() {

        const songs = this.props.songs.map((song)=>{
            return (
              
                <SongsCard song={song} key={song.title}/>
            )
        });
        
        return (
            <div className="ui divided list">
              {songs}  
            </div>
        )
    }
};

const mapstateToProps = (state) => {
    return { songs:state.songs }
};



export default connect(mapstateToProps, {})(SongList);