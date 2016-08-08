import React from 'react';
import Radium from 'radium';
import { Day, Description, Temperature, Wind, Atmosphere } from './';

// eslint-disable-next-line
export default Radium(({ forecast, onClick }) => {

  const styles = {
    base: {
      fontSize: '1.5em'
    , ':hover': {
        cursor: 'pointer'
      }
    }
  };

  return (
    <div className='summary' onClick={onClick} style={[ styles.base ]}>
      <Day date={forecast.date} />
      <Description description={forecast.description} />
      <Temperature maximum={forecast.maximumTemperature} minimum={forecast.minimumTemperature} />
      <Wind speed={forecast.windSpeed} direction={forecast.windDirection} />
      <Atmosphere rainfall={forecast.rainfall} pressure={forecast.pressure} />
    </div>
  );
});