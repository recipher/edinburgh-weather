import React from 'react';
import { StyleRoot } from 'radium';
import { connect } from 'react-redux';
import { Forecast } from './';

export const Weather = ({ forecast }) => {
  const styles = {
    base: {
      width: '100%'
    , margin: '0 auto'
    , fontFamily: 'Lato'
    , fontWeight: 400
    }
  , message: {
      fontSize: '1.1em'
    }
  };

  return (
    <StyleRoot style={styles.base}>
      <h1>Five Day Weather Forecast for {forecast.city}</h1>
      {forecast.fetching && <div style={styles.message}>Checking the skies...</div>}
      {forecast.error && <div style={styles.message}>Error retrieving the forecast</div>}
      {forecast.dates.map(date => <Forecast key={date.date} date={date} />)}
    </StyleRoot>
  );
};

export default connect(state => ({ forecast: state.forecast }))(Weather);
