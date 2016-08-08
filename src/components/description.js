import React from 'react';
import * as Icons from './icon';

export default ({ description }) => {

  const Icon = Icons[description];

  return (
    <div>
      <Icon className='icon' label={description} />
      <span className='description'>{description}</span>
    </div>
  );
};
