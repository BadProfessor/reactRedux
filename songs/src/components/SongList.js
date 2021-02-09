import React, { Component } from 'react';
// connect component
import { connect } from 'react-redux';
// importing the action creator for selecting a song
import { selectSong } from '../actions';

// class based component
class SongList extends Component {
  renderList() {
    // this.props.songs contains the list of objects
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// mapping the state to props, saving the state so we can render it
const mapStateToProps = state => {
  return { songs: state.songs };
};

// connect component, mapping the details
// selectSong object, shortened syntax from  selectSong: selectSong
export default connect(mapStateToProps, { selectSong })(SongList);
