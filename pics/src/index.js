// import the dependencies
import React from 'react';
import ReactDOM from 'react-dom';
// import the App component, which is going to be the main component
// we are separating it to make it more modular
import App from './components/App';

// rendering it in the #root ID with ReactDOM
ReactDOM.render(<App />, document.querySelector('#root'));
