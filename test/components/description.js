import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Description from '../../src/components/description';

describe('Description component', () => {

  const setup = description => {
    const component = shallow(<Description description={description} />);
    return { 
      component
    , description: component.find('.description') 
    };
  };

  it('displays the description correctly', () => {
    const { description } = setup('Rain');
    expect(description.text()).to.contain('Rain');
  });

});