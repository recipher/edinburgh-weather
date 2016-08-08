import React from 'react';
import moment from 'moment';

export default ({ date }) => {

  return (
    <div>
      <span className='name'>{moment(date).format('ddd')}</span>
      <span className='date'>{moment(date).format('D')}</span>
    </div>
  );
};