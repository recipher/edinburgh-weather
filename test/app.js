import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import App from '../src/app';

chai.use(chaiEnzyme());

describe('App component', () => {

  const setup = () => {
    return mount(<App />);
  };

  it('mounts the app', () => {
    expect(setup());
  });
});