import React from 'react';
import * as Icons from './icon';
import Cell from './cell';

export default ({ description, size = 32 }) => {
  const Icon = Icons[description];

  return (
    <Cell width={15} align='center'>
      <Icon className='icon' label={description} size={size} />
    </Cell>
  );
};
