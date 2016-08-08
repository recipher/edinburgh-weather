import React from 'react';
import moment from 'moment';
import Cell from './cell';

export default ({ date }) => {

  return (
    <Cell align='left' width={15}>
      <span className='hour'>{moment(date).format('HHmm')}</span>
    </Cell>
  );
};