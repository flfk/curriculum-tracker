import React from 'react';
import PropTypes from 'prop-types';

import Subject from './Subject';

const Topic = (props) => {
  const { subjectIDs } = props;

  const subjects = subjectIDs
    .map(elem => <Subject key={elem} subjectID={elem} />);

  return (
    <div className="App">
      <div>{ subjects }</div>
    </div>
  );
};

export default Topic;
