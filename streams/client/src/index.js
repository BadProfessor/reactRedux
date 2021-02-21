import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App';
import reducers from './reducers';

const compseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(reducers, compseEnhancers(applyMiddleware()));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
