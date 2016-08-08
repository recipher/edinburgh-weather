import _ from 'lodash';
import moment from 'moment';

export const TOGGLE = 'TOGGLE';

const DAYS = 5;

const forecasts = [ 
  { 
    key: 1
  , date: new Date(2016, 7, 8, 0, 0, 0)
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
  , date: new Date(2016, 7, 8, 3, 0, 0)
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
  , date: new Date(2016, 7, 8, 6, 0, 0)
  , description: 'Rain'
  , maximumTemperature: 20 
  , minimumTemperature: 10 
  , windSpeed: 20
  , windDirection: 359
  , rainfall: 0
  , pressure: 1000 
  } 
];

export const initialState = {
  dates: _.range(DAYS).map(day => ({
    date: moment().add(day, 'day')
  , active: false
  }))
, forecasts
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE: 
    const dates = state.dates.map(date => {
      date.active = !date.active && moment(date.date).isSame(action.payload.date, 'day');
      return date;
    });

    return _.assign({}, state, { dates });
    default:
    return state;
  }
};

export const summarySelector = (state, props) => {
  return _.find(state.forecast.forecasts, forecast => {
    return moment(forecast.date).isSame(props.date.date, 'day');
  });
};

export const detailSelector = (state, props) => {
  return _.filter(state.forecast.forecasts, forecast => {
    return moment(forecast.date).isSame(props.date.date, 'day');
  });
};

export const dateSelector = (state, props) => {
  return _.find(state.forecast.dates, date => {
    return moment(date.date).isSame(props.date.date, 'day');
  });
};

export const toggle = (date) => {
  return { type: TOGGLE, payload: { date }};
};

