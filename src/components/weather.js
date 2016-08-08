import React, { Component } from 'react';
import { Forecast } from './';

export default class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.forecast.dates.map(date => <Forecast key={date.date} date={date} />)}
      </div>
    );
  }
};