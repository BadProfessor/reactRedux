import React from 'react';
// importing the components
import SongList from './SongList';
import SongDetail from './SongDetail';

// returning a simple div with the SongList and SongDetails components
const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        {/* style for the song detail, within a div */}
        <div className="column eight wide">
          {/* component */}
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
