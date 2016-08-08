import React, { Component } from 'react';
import { Day, Temperature, Wind } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <Day date={new Date()} />
        <Temperature maximum={20} minimum={10} />
        <Wind speed={20} direction={360} />
      </div>
    );
  }
};

export default App;