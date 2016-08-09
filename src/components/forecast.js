import React from 'react';
import { connect } from 'react-redux';
import { summarySelector, detailSelector, dateSelector, toggle } from '../ducks/forecast';
import { Summary, Details } from './';

export const Forecast = ({ summary, details, date, toggle }) => {
  if (summary == null) return <div/>;

  const styles = {
    base: {
      paddingBottom: 20
    }
  };

  return (
    <div style={styles.base}>
      <Summary forecast={summary} onClick={_ => toggle(date.date)} />
      <Details details={details} active={date.active} />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return { 
    summary: summarySelector(state, props)
  , details: detailSelector(state, props)
  , date: dateSelector(state, props)
  };
};

export default connect(mapStateToProps, { toggle })(Forecast);
