import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {
    render() {
        const song = this.props.song;
        if(!song){
            return (
                <div>
                   <h2>Select a Song</h2>
                   <div className="ui large active inline loader"></div>
                </div>
            );
        }
        return (
            <div >
               <h2> Details for:</h2>
               <h3>
                   Title:{song.title}<br />
                   Duration:{song.duration}<br/>
                   Movie:{song.movie}
               </h3>
            </div>
        )
    }
};


const mapStateToProps = (state) => {
    return { song: state.selectedSong }
};
export default connect(mapStateToProps)(SongDetail);