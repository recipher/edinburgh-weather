import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import createStore from './store';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={createStore()}>
    <App />
  </Provider>
, root);
