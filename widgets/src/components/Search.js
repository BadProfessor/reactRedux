// importing React and hook system
import React, { useState, useEffect } from 'react';
// importing Axios for APIs
import axios from 'axios';

// making the component
const Search = () => {
  // importing state, and default state value
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  // saving in the state an array of objects for results
  const [results, setResults] = useState([]);

  // we are setting timeOut
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    // returning timer ID after the timeOut
    return () => {
      clearTimeout(timerId);
    };
    // empty array
  }, [term]);

  // making a useEffect function to get axios get request from Wikipedia
  useEffect(() => {
    // making a const function with async and axios
    const search = async () => {
      // taking the data out of the response
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    // calling immediately the function
    search();
  }, [debouncedTerm]);

  // every result we got back and we are builing results out of them
  // mapping over the results
  const renderedResults = results.map((result) => {
    return (
      // mapped divs
      // pushing the content on the right and giving the ui button and the link
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {/* don't use this, hidden feature by React Team. It can be used for XSS Attacks. Any time we are taking a string from a third party API we could be introducing a security threat */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  // return the form
  return (
    // creating the div
    <div>
      {/* creating the form, label and input */}
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

// exporting the component
export default Search;
