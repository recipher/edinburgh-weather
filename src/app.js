import React, { Component } from 'react';
import { Day, Description, Temperature, Wind } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <Day date={new Date()} />
        <Description description='Rain' />
        <Temperature maximum={20} minimum={10} />
        <Wind speed={20} direction={360} />
      </div>
    );
  }
};

export default App;