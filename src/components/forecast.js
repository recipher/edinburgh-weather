import React from 'react';
import { Summary, Detail } from './';

export default ({ forecast }) => {
  return (
    <div>
      <Summary forecast={forecast} />
      <Detail forecast={forecast} />
    </div>
  );
};
