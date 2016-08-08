import React from 'react';
import Cell from './cell';

export default ({ maximum, minimum }) => {
  const styles = {
    min: {
      fontSize: '0.8em'
    , color: '#999'
    , display: 'block'
    }
  };

  return (
    <Cell>
      <span className='max'>
        {maximum}&#176;
      </span>
      <span className='min' style={styles.min}>
        {minimum}&#176;
      </span>
    </Cell>
  );
};
