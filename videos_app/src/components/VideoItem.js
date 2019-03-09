import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component {
  render() {

    const videos=this.props.videos;
    const onVideoSelect=this.props.onVideoSelect;
    const renderedList =  videos.map((video)=> {
      return (
        <div  key={video.id.videoId} onClick={()=>onVideoSelect(video)} className="video-item item">
          <img className="ui image" alt="#" src={video.snippet.thumbnails.medium.url} />
          <div className="content">
            <div className="header">
              {video.snippet.title}
            </div>
          </div>
        </div>
      );
   });
    return (
       <div className="ui relaxed divided list">
         {renderedList}
      </div>
   )
 }
};

export default VideoItem;
