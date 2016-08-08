import React from 'react';
import Radium from 'radium';
import Cell from './cell';

// eslint-disable-next-line
export default Radium(({ rainfall, pressure }) => {
  const styles = {
    pressure: {
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
    <Cell width={35}>
      <span className='rainfall'>
        {rainfall}mm
      </span>
      <span className='pressure' style={styles.pressure}>
        {pressure}mb
      </span>
    </Cell>
  );
});
