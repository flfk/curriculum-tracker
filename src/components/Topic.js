import React from 'react';
import PropTypes from 'prop-types';
import Subject from './Subject';

import '../styles/topic.css';

import iconProgressBar from '../icons/RoundProgress.png';

const Topic = (props) => {
  const { topic, onTickBtn } = props;

  const { name } = topic;
  const { subjects } = topic;

  const subjectDivs = Object.keys(subjects)
    .map(subjectID => <Subject key={subjectID} subject={subjects[subjectID]} onTickBtn={onTickBtn} />);

  return (
    <div className="topic">
      <div className="topicHeader">
        <div className="topicName">{ name }</div>
        <img className="topicProgress" src={iconProgressBar} alt="Progress Bar" />
        <div className="topicDivider" />
        <button className="topicEditBtn">Edit</button>
      </div>
      <div>{ subjectDivs }</div>
    </div>
  );
};

Topic.propTypes = {
  topic: PropTypes.object,
};
Topic.defaultProps = {
  topic: {},
};

export default Topic;
