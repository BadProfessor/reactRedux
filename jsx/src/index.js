// Import the React and ReactDOM libraries
// import React
// we are using webpack which makes every file existing for itself
// every file is not automatically shared with other
// if we want to use components from react we have to import the functionality
// import: we want to reach a dependency
// React: variable we want to assign to the import, we can name it differently
// from: keyword that specifies that we need to pull code from somewhere
// 'react' from which file or folder we are pulling from
// require are CommonJS modules system import statements
// import is a ES2015 Module systems
import React from 'react';
// import ReactDOM, capital DOM
import ReactDOM from 'react-dom';

// Create a react component
// name it App
// arrow function
const App = () => {
  // Button string const
  const buttonText = { text: `Don't click` };
  // const string for the label
  const labelText = `Write something: `;

  return (
    // reutrning a DIV
    // this is not HTML
    // we are using Babel to convert to ES5
    // the browser doesn't understand JSX/React
    // babeljs.io explains what is exactly happening when we compile from ES6+ to es5
    // in ES5 this returns a JS function call
    // we are not writing direct function calls because it can get way more complicated, and we go around that with the JSX
    // special dialect of JS/Not HTML
    // browsers don't understand JSX
    // JSX very similar to HTML, but it has differences
    // we are entering the text with braces and variables
    // we don't need the actual .jsx filename
    // convention: double quotes for jsx properties, single quotes for everything else
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <br />
      <input id="name" type="text" />
      <br />
      {
        // we need to use custom inline styling for React
        // whenever we have any dashes in our styling we need to use snakeCase
        // we wrap the values in strings
      }
      <button style={{ backgroundColor: 'pink', color: 'black' }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
// root id
// query selector for the root ID
ReactDOM.render(<App />, document.querySelector('#root'));
