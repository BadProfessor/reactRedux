// importing the dependencies
import React from 'react';
import unsplash from '../api/unsplash';
// importing SearchBar component
import SearchBar from './SearchBar';
// list of images component
import ImageList from './ImageList';

// making the App component
// refactored into the class component so that it can pass functions
class App extends React.Component {
  // we need to initialize a prop, with an empty array
  state = { images: [] };

  // on the search click
  // this is called with the search term
  // async allows to use async/await syntax
  // in front of the request we make the asynchonous call
  onSearchSubmit = async term => {
    // we are accessing the search/photos endpoint
    // we are making the get request
    const response = await unsplash.get('/search/photos', {
      // we are searching for the term
      params: { query: term }
    });

    // we pull out the images and save it to respons.data.results into images
    this.setState({ images: response.data.results });
  };

  // we need to call the render method in class based components
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
        {/* we are making a in image list */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

// exporting the App component
export default App;
