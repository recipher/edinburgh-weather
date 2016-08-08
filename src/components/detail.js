import React from 'react';
import { Hour, Description, Temperature, Wind, Atmosphere } from './';

export default ({ forecast }) => {

  return (
    <div className='detail'>
      <Hour date={forecast.date} />
      <Description description={forecast.description} />
      <Temperature maximum={forecast.maximumTemperature} minimum={forecast.minimumTemperature} />
      <Wind speed={forecast.windSpeed} direction={forecast.windDirection} />
      <Atmosphere rainfall={forecast.rainfall} pressure={forecast.pressure} />
    </div>
  );
};