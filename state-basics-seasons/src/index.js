// importing dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// importing the components
import Season from './Season';
import Loader from './Loader';

// we are making a class based component
// we are using the class based component to use the state system
// when we make a class we are calling one main method but it is expecting to have other methods attached to it
// we are making a class so we can borrow the functionalities from React.Component
// we don't need the constructors every time, because Babeljs takes care of it
class App extends React.Component {
  // we initialize a property latitude and error messages
  // we are initalizing it to our state
  // only time we do direct assignment to this.state
  // getting the error message also
  state = { lat: null, errorMessage: '' };

  // lifecycle method
  // checking if the component rendered on the screen
  componentDidMount() {
    // geolocation API which gets the current position but doesn't displays it
    // link to the API
    window.navigator.geolocation.getCurrentPosition(
      // call back for the position
      // (position) => console.log(position),
      // latitute and longitude of the current user
      // state only usable with class components (useState is for functional components)
      // we are using the latitude to update the state object
      // we are calling setState
      position => this.setState({ lat: position.coords.latitude }),
      // failure call back for the errors
      // handling errors
      // we are catching the error message
      err => this.setState({ errorMessage: err.message })
    );
  }

  // helper method that has conditional statements and are sent to render()
  renderContent() {
    // if we have an error message and no latitude
    if (this.state.errorMessage && !this.state.lat) {
      // returning the error message
      return <div>Error: {this.state.errorMessage}</div>;
    }

    // if we do not have an error message and we have the latitude
    if (!this.state.errorMessage && this.state.lat) {
      // we are returning the latitude
      // we are calling the component and the child component
      return <Season lat={this.state.lat} />;
    }

    // return the loading message if the previous fails
    // we are inputing a specific message
    return <Loader message="Please allow location tracking." />;
  }

  // we are defining a render method
  // we have to define render
  // we are always calling the render method
  // therefore we need to manage what we are calling
  render() {
    // we are calling the renderContent function
    // we are always calling the blue border, that's why this is in render and not in the each component
    // the border blue class doesn't exist, just for show
    return <div className="border blue">{this.renderContent()}</div>;
  }
}

// we are rendering in the root
ReactDOM.render(<App />, document.querySelector('#root'));
