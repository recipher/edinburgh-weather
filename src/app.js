import React, { Component } from 'react';
import { Day, Hour, Description, Temperature, Wind, Atmosphere } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Day date={new Date()} />
          <Description description='Rain' />
          <Temperature maximum={20} minimum={10} />
          <Wind speed={20} direction={360} />
          <Atmosphere rainfall={0} pressure={1000} />
        </div>
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