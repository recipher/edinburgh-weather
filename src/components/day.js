import React from 'react';
import Radium from 'radium';
import moment from 'moment';
import Cell from './cell';

// eslint-disable-next-line
export default Radium(({ date }) => {
  const styles = {
    date: {
      display: 'block'
    }
  };

  return (
    <Cell align='left'>
      <span className='name'>
        {moment(date).format('ddd')}
      </span>
      <span className='date' style={styles.date}>
        {moment(date).format('D')}
      </span>
    </Cell>
  );
});