import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import App from '../src/app';

describe('App component', () => {

  const setup = () => {
    return mount(<App />);
  };

  it('mounts the app', () => {
    expect(setup());
  });
});