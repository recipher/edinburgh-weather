import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Summary from '../../src/components/summary';

describe('Summary component', () => {

  const setup = forecast => {
    const component = shallow(<Summary forecast={forecast} />);
    return { 
      component
    , summary: component.find('.summary')
    };
  };

  it('displays the summary', () => {
    const { summary } = setup({ 
      date: new Date(2016, 10, 10)
    , description: 'Rain'
    , maximumTemperature: 20 
    , minimumTemperature: 10 
    , windSpeed: 20
    , windDirection: 359
    , rainfall: 0
    , pressure: 1000 
    });

    expect(summary);
  });

});