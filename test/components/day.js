import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Day from '../../src/components/day';

describe('Day component', () => {

  const setup = date => {
    const component = shallow(<Day date={date} />);
    return { 
      component
    , name: component.find('.name') 
    , date: component.find('.date') 
    };
  };

  it('displays the day name correctly', () => {
    const { name } = setup(new Date(2016, 6, 8));
    expect(name.text()).to.equal('Fri');
  });

  it('displays the day date correctly', () => {
    const { date } = setup(new Date(2016, 6, 8));
    expect(date.text()).to.equal('8');
  });

});