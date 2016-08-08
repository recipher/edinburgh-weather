import React from 'react';
import moment from 'moment';
import Cell from './cell';

export default ({ date }) => {

  return (
    <Cell align='left'>
      <span className='hour'>{moment(date).format('HHmm')}</span>
    </Cell>
  );
};