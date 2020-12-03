// importing the dependencies
import React from 'react';
import unsplash from '../api/unsplash';
// importing SearchBar component
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// making the App component
class App extends React.Component {
  state = { images: [] };

  // on the search click
  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      // container class
      <div
        className="ui container"
        // we usually wouldn't do in line styles, but for one line it is ok
        style={{ marginTop: '10px' }}
      >
        {/* rendering SearchBar 
        We are going to have text input here
        */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

// exporting the App component
export default App;
