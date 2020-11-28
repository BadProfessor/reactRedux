// Import the React and ReactDOM libraries
// React
import React from 'react';
// ReactDOM
import ReactDOM from 'react-dom';

// Create a react component
// name it App
const App = () => {
  // Button text const
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
// root id
ReactDOM.render(<App />, document.querySelector('#root'));
