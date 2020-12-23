// import the components
import React from 'react';

// make a class based component
class SearchBar extends React.Component {
  // we are initializing the search term as an empty string
  state = { term: '' };

  // arrow function
  // event callback with the event object
  onInputChange = (event) => {
    // we are calling the  term and changing its value
    // now we can type into the text field
    this.setState({ term: event.target.value });
  };

  // when we submit
  // call back arrow function with the event object
  onFormSubmit = (event) => {
    // we are preventing the default refresh
    event.preventDefault();

    // we are calling the callback from the parent component
    this.props.onFormSubmit(this.state.term);
  };

  // render the div
  render() {
    return (
      // making a separate ui
      // search-bar for custom styling
      <div className="search-bar ui segment">
        {/* form element with styling */}
        {/* we are calling onSubmit change */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          {/* field */}
          <div className="field">
            {/* adding separate label */}
            <label>Video Search</label>
            <input
              // type label for each input
              type="text"
              // the value comes the inputed term
              value={this.state.term}
              // onChange prop, it is called every time the input is changed
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

// export the component
export default SearchBar;
