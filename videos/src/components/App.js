// import the libraries
import React from 'react';
// import the api from Youtube
import youtube from '../apis/youtube';
// import the components
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

// class based component
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  // when we call the search and we append it to the api
  // we are adding the callback as a prop
  // we are making it an async function so it doesn't get stuck
  // youtube is already preconfigured with axios
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  // render the content within the div
  render() {
    return (
      <div className="ui container">
        {/* calling the SearchBar component 
        we are entering the prop from the onTermSubmit function and adding the parameters
        */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export the component
export default App;
