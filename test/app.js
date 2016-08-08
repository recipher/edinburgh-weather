import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { mount } from 'enzyme';

import App from '../src/app';

const mockStore = configureStore([ thunk ]);

describe('App component', () => {

  const setup = () => {
    return mount(
      <Provider store={mockStore({ forecast: { dates: [], forecasts: [] }})}>
        <App />
      </Provider>
    );
  };

  it('mounts the app', () => {
    expect(setup());
  });
});