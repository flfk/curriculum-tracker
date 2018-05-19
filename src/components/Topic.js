import React from 'react';
import PropTypes from 'prop-types';
import Subject from './Subject';

import '../styles/topic.css';

const Topic = (props) => {
  const { topicName } = props;
  const { subjectIDs } = props;

  const subjects = subjectIDs
    .map(elem => <Subject key={elem} subjectID={elem} />);

  return (
    <div className="topic">
      <div className="topicHeader">
        <div className="topicName">{ topicName }</div>
        <div className="topicProgress"></div>
        <div className="topicDivider" />
        <button className="topicEditBtn">Edit</button>
      </div>
      <div>{ subjects }</div>
    </div>
  );
};

Topic.propTypes = {
  topicName: PropTypes.string,
  subjectIDs: PropTypes.array,
};
Topic.defaultProps = {
  topicName: '',
  subjectIDs: [],
};

export default Topic;
