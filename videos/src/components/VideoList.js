// importing react
import React from 'react';
// importing component
import VideoItem from './VideoItem';

// making an arrow function
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

// exporting the component
export default VideoList;
