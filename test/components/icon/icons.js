import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import * as Icons from '../../../src/components/icon';

const TYPES = [ 'Cloud', 'Mist', 'Moon', 'Rain', 'Shower', 'Snow', 'Sun', 'Thunder' ];

describe('Icon components', () => {

  const setup = (type) => {
    const Icon = Icons[type]
        , component = mount(<Icon />);

    return {
      component
    , path: component.find('.' + type.toLowerCase())
    };
  };

  it('Renders the icons', () => {
    TYPES.forEach(type => {
      const result = setup(type);
      expect(result.path.type()).to.equal('path');
    });
  });
});