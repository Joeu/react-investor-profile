import React from 'react';
import { DATA_NOT_ENTERED_HEADER, DATA_NOT_ENTERED_TEXT } from '../../data/utils/constants';

const IncompleteData = (props) => {
  return (
    <div>
      <h2>{DATA_NOT_ENTERED_HEADER}</h2>
      <p>{DATA_NOT_ENTERED_TEXT}</p>
    </div>
  );
}

export default IncompleteData;
