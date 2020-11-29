// importing dependencies
import React from "react";
import ReactDOM from "react-dom";
// importing the components
import Season from "./Season";
import Spinner from "./Spinner";

// we are making a class based component
// we are using the class based component to use the state system
// when we make a class we are calling one main method but it is expecting to have other methods attached to it
// we are making a class so we can borrow the functionalities from React.Component
class App extends React.Component {
  // we initialize a property latitude and error messages
  // we are assigning it to our state
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    // geolocation API which gets the current position but doesn't displays it
    // link to the API
    window.navigator.geolocation.getCurrentPosition(
      // call back for the position
      // (position) => console.log(position),
      // latitute and longitude of the current user
      // state only usable with class components (useState is for functional components)
      (position) => this.setState({ lat: position.coords.latitude }),
      // failure call back for the errors
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      // we are initializing the latitute
      return <Season lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  // we are defining a render method
  // we have to define render
  render() {
    // we are calling the renderContent function
    return <div className="border red">{this.renderContent()}</div>;
  }
}

// we are rendering in the root
ReactDOM.render(<App />, document.querySelector("#root"));
