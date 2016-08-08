import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Temperature from '../../src/components/temperature';

chai.use(chaiEnzyme());

describe('Temperature component', () => {

  const setup = (maximum, minimum) => {
    const component = shallow(<Temperature maximum={maximum} minimum={minimum} />);
    return { 
      component
    , maximum: component.find('.max') 
    , minimum: component.find('.min') 
    };
  };

  it('displays the maximum temperature correctly', () => {
    const { maximum } = setup(20, 10);
    expect(maximum.text()).to.contain('20');
  });

  it('displays the minimum temperature correctly', () => {
    const { minimum } = setup(20, 10);
    expect(minimum.text()).to.contain('10');
  });

});