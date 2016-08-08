import React, { Component } from 'react';
import { Forecast } from './components';

class App extends Component {
  render() {
    const forecasts = [ 
      { 
        key: 1
      , date: new Date(2016, 6, 1, 0, 0, 0)
      , description: 'Rain'
      , maximumTemperature: 20 
      , minimumTemperature: 10 
      , windSpeed: 20
      , windDirection: 359
      , rainfall: 0
      , pressure: 1000 
      } 
    , { 
        key: 2
      , date: new Date(2016, 6, 1, 3, 0, 0)
      , description: 'Rain'
      , maximumTemperature: 20 
      , minimumTemperature: 10 
      , windSpeed: 20
      , windDirection: 359
      , rainfall: 0
      , pressure: 1000 
      } 
    , { 
        key: 3
      , date: new Date(2016, 6, 1, 6, 0, 0)
      , description: 'Rain'
      , maximumTemperature: 20 
      , minimumTemperature: 10 
      , windSpeed: 20
      , windDirection: 359
      , rainfall: 0
      , pressure: 1000 
      } 
    ];

    return (
      <div>
        {forecasts.map(forecast => <Forecast key={forecast.key} forecast={forecast} />)}
      </div>
    );
  }
};

export default App;