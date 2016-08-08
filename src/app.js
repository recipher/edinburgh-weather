import React, { Component } from 'react';
import { Summary, Detail } from './components';

class App extends Component {
  render() {
    const forecast = { 
      date: new Date()
    , description: 'Rain'
    , maximumTemperature: 20 
    , minimumTemperature: 10 
    , windSpeed: 20
    , windDirection: 359
    , rainfall: 0
    , pressure: 1000 
    };

    return (
      <div>
        <Summary forecast={forecast} />
        <Detail forecast={forecast} />
      </div>
    );
  }
};

export default App;