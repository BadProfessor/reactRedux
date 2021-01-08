// importing react
import React from 'react';
// importing component
import VideoItem from './VideoItem';

// making an arrow function
// entering the props
const VideoList = ({ videos, onVideoSelect }) => {
  // we are maping over the videos array
  // this is going to be a brand new array
  // we are iterating over the video prop
  const renderedList = videos.map((video) => {
    return (
      // we are calling the video item component
      // adding a it select and the actual video
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  // importing the styling from Semantic UI
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

// exporting the component
export default VideoList;
