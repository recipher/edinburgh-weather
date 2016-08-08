import React from 'react';
import { Arrow } from './icon';

export default ({ speed, direction, units = 'kph' }) => {

  return (
    <div>
      <span className='speed'>{speed}{units}</span>
      <span className='direction'>
        <Arrow size={16} style={{transform: `rotate(${Math.round(direction)}deg)`}} />
      </span>
    </div>
  );
};
