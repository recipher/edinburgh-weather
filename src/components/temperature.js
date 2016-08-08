import React from 'react';
import Radium from 'radium';
import Cell from './cell';

// eslint-disable-next-line
export default Radium(({ maximum, minimum }) => {
  const styles = {
    min: {
      display: 'inline-block'
    , paddingLeft: 10
    , fontSize: '0.8em'
    , fontWeight: 300
    , color: '#999'
    , '@media (max-width: 639px)': {
        display: 'block'
      , paddingLeft: 0
      }
    }
  };

  return (
    <Cell width={15}>
      <span className='max'>
        {maximum}&#176;
      </span>
      <span className='min' style={styles.min}>
        {minimum}&#176;
      </span>
    </Cell>
  );
});
