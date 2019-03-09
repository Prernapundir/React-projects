import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
  render() {
    return (
      <div>
        <VideoItem
          videos={this.props.videos}
          onVideoSelect={this.props.onVideoSelect}
        />
      </div>
    );
  }
};


export default VideoList;
