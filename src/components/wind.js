import React from 'react';
import Radium from 'radium';
import { Arrow } from './icon';
import Cell from './cell';

// eslint-disable-next-line
export default Radium(({ speed, direction, units = 'kph' }) => {
  const styles = {
    direction: {
      display: 'inline-block'
    , paddingLeft: 10
    , '@media (max-width: 639px)': {
        display: 'block'
      , paddingLeft: 0
      }
    }
  };

  return (
    <Cell width={20}>
      <span className='speed'>{speed}{units}</span>
      <span className='direction' style={styles.direction}>
        <Arrow size={16} style={{transform: `rotate(${direction}deg)`}} />
      </span>
    </Cell>
  );
});
