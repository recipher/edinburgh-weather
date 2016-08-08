import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Weather } from './components';

export class App extends Component {
  render() {
    return (
      <Weather {...this.props} />
    );
  }
};

export default connect(state => ({ forecast: state.forecast }))(App);
