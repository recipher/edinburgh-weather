import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fetch } from './ducks/forecast';

import App from './app';
import createStore from './store';

const CITY = 'Edinburgh';

const store = createStore()
    , root = document.getElementById('root');
    
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, root);

store.dispatch(fetch(CITY));