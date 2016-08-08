import React from 'react';
import { Day, Description, Temperature, Wind, Atmosphere } from './';

export default ({ forecast }) => {

  return (
    <div className='summary'>
      <Day date={forecast.date} />
      <Description description={forecast.description} />
      <Temperature maximum={forecast.maximumTemperature} minimum={forecast.minimumTemperature} />
      <Wind speed={forecast.windSpeed} direction={forecast.windDirection} />
      <Atmosphere rainfall={forecast.rainfall} pressure={forecast.pressure} />
    </div>
  );
};