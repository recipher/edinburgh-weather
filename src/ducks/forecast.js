import _ from 'lodash';
import moment from 'moment';
import axios from 'axios';

export const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast';
export const APP_ID = '1b9a4cf6f5eecebb884e5b6e7144cb98';

export const TOGGLE = 'TOGGLE';
export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const FAILED = 'FAILED';

const DAYS = 5;

export const initialState = {
  dates: _.range(DAYS).map(day => ({
    date: moment().add(day, 'day')
  , active: false
  }))
, forecasts: []
, fetching: false
, error: false
, city: null
};

export const mapForecast = (forecast, index) => {
  return { 
    key: index
  , date: moment.unix(forecast.dt).utc().toDate()
  , description: forecast.weather[0].main
  , maximumTemperature: Math.floor(forecast.main.temp_max)
  , minimumTemperature: Math.floor(forecast.main.temp_min)
  , windSpeed: Math.floor(forecast.wind.speed)
  , windDirection: Math.floor(forecast.wind.deg)
  , rainfall: Math.floor(forecast.rain['3h'] || 0)
  , pressure: Math.floor(forecast.main.pressure)
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE: 
    const dates = state.dates.map(date => {
      date.active = !date.active && moment(date.date).isSame(action.payload.date, 'day');
      return date;
    });

    return _.assign({}, state, { dates });

    case FETCH:
      return _.assign({}, state, { fetching: true, city: action.payload.city });

    case SUCCESS: 
      return _.assign({}, state, { fetching: false, forecasts: action.payload.forecasts.map(mapForecast) });

    case FAILED: 
      return _.assign({}, state, { fetching: false, error: true });

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

export const toggle = date => {
  return { type: TOGGLE, payload: { date }};
};

export const fetch = city => {
  const url = `${BASE_URL}?q=${city},uk&units=metric&appid=${APP_ID}`;
  
  return dispatch => {
    dispatch({ type: FETCH, payload: { city }});

    return axios.get(url)
    .then(response => {
      if (response.data == null || response.data.list == null) return dispatch({ type: FAILED });

      dispatch({ type: SUCCESS, payload: { forecasts: response.data.list }});
    })
    .catch(error => {
      dispatch({ type: FAILED });
    });
  };
};

