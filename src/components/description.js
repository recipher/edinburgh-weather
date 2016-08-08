import React from 'react';
import * as Icons from './icon';

export default ({ description }) => {

  const Icon = Icons[description];

  return (
    <Icon className='icon' label={description} />
  );
};
