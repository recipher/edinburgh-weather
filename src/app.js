import React, { Component } from 'react';
import { Day, Temperature } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <Day date={new Date()} />
        <Temperature maximum={20} minimum={10} />
      </div>
    );
  }
};

export default App;