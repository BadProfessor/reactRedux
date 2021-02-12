import React from 'react';
// connect function
import { connect } from 'react-redux';

// the last component with the details that we are going to input into the list
// functional component
const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }

  // returning a simple div with the song details, titles and duration
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

// exporting the component
// mapping to props
export default connect(mapStateToProps)(SongDetail);
