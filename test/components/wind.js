import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import Wind from '../../src/components/wind';

chai.use(chaiEnzyme());

describe('Wind component', () => {

  const setup = (speed, direction, units) => {
    const component = shallow(<Wind speed={speed} direction={direction} units={units} />);
    return { 
      component
    , speed: component.find('.speed') 
    , direction: component.find('.direction') 
    };
  };

  it('displays the speed correctly', () => {
    const { speed } = setup(25, 360, 'kph');
    expect(speed.text()).to.equal('25 kph');
  });

  it('displays the speed correctly when no units are specified', () => {
    const { speed } = setup(25, 360);
    expect(speed.text()).to.equal('25 kph');
  });

  it('displays the speed correctly when alternate units are specified', () => {
    const { speed } = setup(30, 360, 'mph');
    expect(speed.text()).to.equal('30 mph');
  });

  it('displays the direction correctly', () => {
    const { direction } = setup(25, 360);
    expect(direction.text()).to.equal('360');
  });

});