import React, { useState } from 'react';

// refactoring into a function component
// we only need useState
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  // onSubmit function when we enter the search term
  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search For A Video</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
