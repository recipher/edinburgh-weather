import React from 'react';
import { Forecast } from './';

export default ({ forecast }) => {
  return (
    <div style={{width:'100%'}}>
      <h1>Five Day Weather Forecast for {forecast.city}</h1>
      {forecast.dates.map(date => <Forecast key={date.date} date={date} />)}
    </div>
  );
};