import React from 'react';
import * as Icons from './icon';
import Cell from './cell';

export default ({ description }) => {
  const Icon = Icons[description];

  return (
    <Cell width={15} align='center'>
      <Icon className='icon' label={description} size={32} />
    </Cell>
  );
};
