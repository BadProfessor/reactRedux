// select song action creator
export const selectSong = song => {
  // Return a simple action action, selects the song
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
