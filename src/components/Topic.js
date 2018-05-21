import React from 'react';
import PropTypes from 'prop-types';
// https://github.com/react-component/progress <--- circular progress bar
import { Circle } from 'rc-progress';
import Subject from './Subject';

import '../styles/topic.css';

const Topic = (props) => {
  const { topicID, topic, onTickBtn } = props;

  const {
    name, subjects, subjectsTotal, subjectsCompleted,
  } = topic;

  const progress = (subjectsCompleted / subjectsTotal) * 100;

  const progressBar = <Circle className="topicProgress" percent={progress} strokeWidth="15" trailWidth="15" strokeColor="#DD4C4F" />;

  const subjectDivs = topic.subjects
    .map(subject => (
      <Subject
        key={subject.subjectID}
        topicID={topicID}
        subjectID={subject.subjectID}
        subject={subject}
        onTickBtn={onTickBtn}
      />
    ));


  return (
    <div className="topic">
      <div className="topicHeader">
        <div className="topicName">{name}</div>
        {progressBar}
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
