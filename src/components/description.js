import React from 'react';
import * as Icons from './icon';
import Cell from './cell';

export default ({ description }) => {
  const Icon = Icons[description];

  return (
    <Cell>
      <Icon className='icon' label={description} />
    </Cell>
  );
};
