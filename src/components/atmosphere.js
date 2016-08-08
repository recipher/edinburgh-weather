import React from 'react';

export default ({ rainfall, pressure }) => {

  return (
    <div>
      <span className='rainfall'>{rainfall}mm</span>
      <span className='pressure'>{pressure}mb</span>
    </div>
  );
};
