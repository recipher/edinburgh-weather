import React, { Component } from 'react';
import { Summary, Hour, Description, Temperature, Wind, Atmosphere } from './components';

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
        <div>
          <Hour date={new Date()} />
          <Description description='Rain' />
          <Temperature maximum={20} minimum={10} />
          <Wind speed={20} direction={360} />
          <Atmosphere rainfall={0} pressure={1000} />
        </div>
      </div>
    );
  }
};

export default App;