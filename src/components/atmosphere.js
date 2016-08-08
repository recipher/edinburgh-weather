import React from 'react';
import Cell from './cell';

export default ({ rainfall, pressure }) => {
  const styles = {
    pressure: {
      fontSize: '0.8em'
    , color: '#999'
    , display: 'block'
    }
  };

  return (
    <Cell>
      <span className='rainfall'>
        {rainfall}mm
      </span>
      <span className='pressure' style={styles.pressure}>
        {pressure}mb
      </span>
    </Cell>
  );
};
