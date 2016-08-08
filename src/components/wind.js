import React from 'react';
import { Arrow } from './icon';

export default ({ speed, direction, units = 'kph' }) => {

  return (
    <div>
      <span className='speed'>{speed}{units}</span>
      <span className='direction'><Arrow size={16} style={{transform: `rotate(${direction})deg)`}} /></span>
    </div>
  );
};
