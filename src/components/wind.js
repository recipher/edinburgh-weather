import React from 'react';
import { Arrow } from './icon';
import Cell from './cell';

export default ({ speed, direction, units = 'kph' }) => {
  const styles = {
    direction: {
      display: 'block'
    }
  };

  return (
    <Cell>
      <span className='speed'>{speed}{units}</span>
      <span className='direction' style={styles.direction}>
        <Arrow size={16} style={{transform: `rotate(${direction}deg)`}} />
      </span>
    </Cell>
  );
};

