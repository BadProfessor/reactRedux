// boilerplate imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

// render the app component within render
ReactDOM.render(
  // we are wrapping app within the Provider component
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  // render it in the root
  document.querySelector('#root')
);
