import React from 'react';

export default ({ speed, direction, units = 'kph' }) => {

  return (
    <div>
      <span className='speed'>{speed} {units}</span>
      <span className='direction'>{direction}</span>
    </div>
  );
};
