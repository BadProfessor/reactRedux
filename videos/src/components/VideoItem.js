// importing the CSS
import './VideoItem.css';
// importing react
import React from 'react';

// making an arrow function component
const VideoItem = ({ video, onVideoSelect }) => {
  // returning the JSX
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
