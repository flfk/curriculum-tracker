import React from 'react';
import PropTypes from 'prop-types';
// https://github.com/react-component/progress <--- circular progress bar
import { Circle } from 'rc-progress';
import Subject from './Subject';

import '../styles/topic.css';

const Topic = (props) => {
  const { topic, topicIndex, onTickBtn } = props;

  const {
    name, subjectsTotal, subjectsCompleted,
  } = topic;

  const progress = (subjectsCompleted / subjectsTotal) * 100;

  const progressBar = <Circle className="topicProgress" percent={progress} strokeWidth="15" trailWidth="15" strokeColor="#DD4C4F" />;

  const subjectDivs = topic.subjects
    .map((subject, index) => (
      <Subject
        key={subject.subjectID}
        topicIndex={topicIndex}
        subjectIndex={index}
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
  topic: PropTypes.shape({
    topicID: PropTypes.string,
    name: PropTypes.string,
    subjectsTotal: PropTypes.number,
    subjectsCompleted: PropTypes.number,
    subjects: PropTypes.array,
  }),
  topicIndex: PropTypes.number,
  onTickBtn: PropTypes.func,
};
Topic.defaultProps = {
  topic: {},
  topicIndex: 0,
};

export default Topic;
