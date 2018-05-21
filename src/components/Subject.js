import React from 'react';
import PropTypes from 'prop-types';
import SubjectTag from './SubjectTag';
import {
  NOT_COMPLETED_TICK_CLASS, COMPLETED_TICK_CLASS,
  NOT_COMPLETED_SUBJECT_LINK_CLASS, COMPLETED_SUBJECT_LINK_CLASS,
  NOT_COMPLETED_TAGS_CLASS, COMPLETED_TAGS_CLASS,
} from '../constants/cssClasses';

import '../styles/subject.css';

import iconTick from '../icons/Tick.png';


const Subject = (props) => {
  const {
    topicIndex, subjectIndex, subject, onTickBtn,
  } = props;

  const {
    type, duration, author, link,
  } = subject;

  const typeTag = <SubjectTag key={type} tagName="type" tagValue={type} />;
  const durationTag = <SubjectTag key={duration} tagName="duration" tagValue={duration} />;
  const authorTag = <SubjectTag key={author} tagName="author" tagValue={author} />;

  let tickClass = NOT_COMPLETED_TICK_CLASS;
  let subjectLinkClass = NOT_COMPLETED_SUBJECT_LINK_CLASS;
  let TagDivClass = NOT_COMPLETED_TAGS_CLASS;

  if (subject.isComplete) {
    tickClass = COMPLETED_TICK_CLASS;
    subjectLinkClass = COMPLETED_SUBJECT_LINK_CLASS;
    TagDivClass = COMPLETED_TAGS_CLASS;
  }

  return (
    <div className="subject">
      <img src={iconTick} alt="Tick" className="tick" />
      <button className={tickClass} onClick={() => onTickBtn(topicIndex, subjectIndex)} />
      <a className={subjectLinkClass} href={link}>{ subject.name}</a>
      <div className={TagDivClass}>
        <div className="subjectTag">{ typeTag }</div>
        <div className="subjectTag">{ durationTag }</div>
        <div className="subjectTag">{ authorTag }</div>
      </div>
    </div>
  );
};

Subject.propTypes = {
  subject: PropTypes.shape({
    subjectID: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    duration: PropTypes.string,
    author: PropTypes.string,
    link: PropTypes.string,
    isComplete: PropTypes.bool,
  }),
  topicIndex: PropTypes.number,
  subjectIndex: PropTypes.number,
  onTickBtn: PropTypes.func,
};
Subject.defaultProps = {
  subject: {},
  topicIndex: 0,
  subjectIndex: 0,
};

export default Subject;
