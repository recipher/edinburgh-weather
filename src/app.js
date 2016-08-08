import React, { Component } from 'react';
import Day from './components/day';

class App extends Component {
  render() {
    return (
      <Day date={new Date()} />
    );
  }
};

export default App;