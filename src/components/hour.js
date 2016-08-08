import React from 'react';
import moment from 'moment';

export default ({ date }) => {

  return (
    <div>
      <span className='hour'>{moment(date).format('HHmm')}</span>
    </div>
  );
};