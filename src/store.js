import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducer';

const logger = createLogger();

export default (initialState) => {
  const store = createStore(reducer, applyMiddleware(thunk, logger));

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      var nextRootReducer = require('./reducer');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
