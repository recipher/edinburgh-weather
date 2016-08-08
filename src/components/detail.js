import React from 'react';
import Radium from 'radium';
import { Hour, Description, Temperature, Wind, Atmosphere } from './';

// eslint-disable-next-line
export default Radium(({ forecast, active }) => {

  const styles = {
    base: {
      maxHeight: 0
    , clear: 'both'
    , overflow: 'hidden'
    , transition: 'all 0.5s ease-in-out'
    }
  , active: {
      maxHeight: 2000
    }
  };

  return (
    <div className='detail' style={[ styles.base, active && styles.active ]}>
      <Hour date={forecast.date} width={15} />
      <Description description={forecast.description} width={15} />
      <Temperature maximum={forecast.maximumTemperature} minimum={forecast.minimumTemperature} />
      <Wind speed={forecast.windSpeed} direction={forecast.windDirection} />
      <Atmosphere rainfall={forecast.rainfall} pressure={forecast.pressure} width={30} />
    </div>
  );
});