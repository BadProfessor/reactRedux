import React from 'react';

// we have destructured the video
const VideoDetail = ({ video }) => {
  // if the video does not exist we're going to get the div with the text loading
  if (!video) {
    return <div>Loading...</div>;
  }

  // we are making the base url plus the video id from a particular video
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    // multi line jsx expression
    <div>
      {/* styling for the iframe */}
      <div className="ui embed">
        {/* Video source, we are entering an embedded video player. Adding the title to fix a warning */}
        <iframe title="video player" src={videoSrc} />
      </div>
      {/* styling for the title */}
      <div className="ui segment">
        {/* showing the title */}
        {/* we are giving the header styling */}
        <h4 className="ui header">{video.snippet.title}</h4>
        {/* description from the snippet in a paragraph */}
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
