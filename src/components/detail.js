import React from 'react';
import { Hour, Description, Temperature, Wind, Atmosphere } from './';

export default ({ forecast, active }) => {

  const styles = {
    base: {
      paddingTop: 5
    , clear: 'both'
    }
  };

  return (
    <div className='detail' style={styles.base}>
      <Hour date={forecast.date} width={15} />
      <Description description={forecast.description} width={15} size={24} />
      <Temperature maximum={forecast.maximumTemperature} minimum={forecast.minimumTemperature} />
      <Wind speed={forecast.windSpeed} direction={forecast.windDirection} />
      <Atmosphere rainfall={forecast.rainfall} pressure={forecast.pressure} width={30} />
    </div>
  );
};