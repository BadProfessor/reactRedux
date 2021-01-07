// importing the CSS
import './VideoItem.css';
// importing react
import React from 'react';

// making an arrow function component
// we are calling onVideoSelect from App.js
const VideoItem = ({ video, onVideoSelect }) => {
  // returning the JSX
  return (
    <div
      onClick={() => onVideoSelect(video)}
      // styling for the items
      className="video-item item"
    >
      <img
        // the alternate titles for the thumbnails
        alt={video.snippet.title}
        // styling for the image
        className="ui image"
        // the snippets thumbnails
        src={video.snippet.thumbnails.medium.url}
      />
      {/* separating */}
      <div className="content">
        {/* This is the title that we are passing. Styling of header*/}
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
