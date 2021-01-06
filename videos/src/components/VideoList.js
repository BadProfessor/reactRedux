// importing react
import React from 'react';
// importing component
import VideoItem from './VideoItem';

// making an arrow function
// entering the props
const VideoList = ({ videos, onVideoSelect }) => {
  // we are maping over the videos array
  // this is going to be a brand new array
  const renderedList = videos.map((video) => {
    return (
      // we are calling the video item component
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
