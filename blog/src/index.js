// importing the dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// creating a store and applying the middleware from reduxt thunk
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// importing the components
import App from './components/App';
import reducers from './reducers';

// hooking the middleware to the store
const store = createStore(reducers, applyMiddleware(thunk));

// rendering the provider and the app components in the #root element of the html
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
