import React from 'react';
import { connect } from 'react-redux';
import { Forecast } from './';

export const Weather = ({ forecast }) => {
  return (
    <div style={{width:'100%'}}>
      <h1>Five Day Weather Forecast for {forecast.city}</h1>
      {forecast.dates.map(date => <Forecast key={date.date} date={date} />)}
    </div>
  );
};

export default connect(state => ({ forecast: state.forecast }))(Weather);
