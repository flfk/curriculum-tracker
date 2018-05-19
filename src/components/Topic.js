import React from 'react';
import PropTypes from 'prop-types';
import Subject from './Subject';

import '../styles/topic.css';

const Topic = (props) => {
  const { subjectIDs } = props;
  const { topicName } = props;

  const subjects = subjectIDs
    .map(elem => <Subject key={elem} subjectID={elem} />);

  return (
    <div className="topic">
      <div className="topicHeader">
        <div className="topicName">{ topicName }</div>
        <div className="topicProgress"></div>
        <div className="topicDivider"></div>
        <button className="topicEditBtn">Edit</button>
      </div>
      <div>{ subjects }</div>
    </div>
  );
};

export default Topic;
