// importing the dependencies
import React from 'react';

// making a class based compoent since we are using state
class SearchBar extends React.Component {
  // we are initilizing the state object
  // default to empty string
  // we are catching the property term which is used for the search
  state = { term: '' };

  // when we submit the form
  // convention is to write the function as per the change being done in the app
  onFormSubmit = event => {
    // preventing the default
    event.preventDefault();

    // changing the state
    this.props.onSubmit(this.state.term);
  };

  // we are rendering the content
  render() {
    return (
      // giving it a segment class
      <div className="ui segment">
        <form
          onSubmit={this.onFormSubmit}
          // form class
          className="ui form"
        >
          {/* field class */}
          <div className="field">
            {/* label for the form */}
            <label>Image Search</label>
            <input
              // type text input
              type="text"
              // we have logging the value
              // we are saving the value from the term
              // we are using the value to save the search terms so we don't store it in the DOM, since we want to keep all the changes in the application
              // we want to always control the components
              value={this.state.term}
              // we will call it on setState
              // we are using the arrow function here, since we don't have to define a separate method on the class. This is used when we want to execute a single line of code. E stands for element
              // we are targeting the term and inputing the value
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

// exporting the SearchBar
export default SearchBar;
