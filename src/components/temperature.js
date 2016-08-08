import React from 'react';

export default ({ maximum, minimum }) => {

  return (
    <div>
      <span className='max'>{maximum} &#176;</span>
      <span className='min'>{minimum} &#176;</span>
    </div>
  );
};
