import React from 'react';
import PropTypes from 'prop-types';
import SubjectTag from './SubjectTag';

import '../styles/subject.css';

import iconTick from '../icons/Tick.png';

const NOT_COMPLETED_TICK_CLASS = 'tickBtn';
const NOT_COMPLETED_SUBJECT_LINK_CLASS = 'subjectLink';
const NOT_COMPLETED_TAGS_CLASS = 'subjectTagsDiv';
const COMPLETED_TICK_CLASS = 'tickBtn tickBtnCompleted';
const COMPLETED_SUBJECT_LINK_CLASS = 'subjectLink subjectLinkCompleted';
const COMPLETED_TAGS_CLASS = 'subjectTagsDiv subjectTagsDivCompleted';

const Subject = (props) => {
  const { subject, onTickBtn } = props;

  const {
    type, duration, author, link,
  } = subject;

  const typeTag = <SubjectTag key={type} tagName="type" tagValue={type} />;
  const durationTag = <SubjectTag key={duration} tagName="duration" tagValue={duration} />;
  const authorTag = <SubjectTag key={author} tagName="author" tagValue={author} />;

  let tickClass = NOT_COMPLETED_TICK_CLASS;
  let subjectLinkClass = NOT_COMPLETED_SUBJECT_LINK_CLASS;
  let TagDivClass = NOT_COMPLETED_TAGS_CLASS;

  let tickBtn = <button className={tickClass} onClick={onTickBtn} />;

  let tickDiv = <div> {tickBtn} </div>;

  if (subject.isComplete) {
    tickClass = COMPLETED_TICK_CLASS;
    subjectLinkClass = COMPLETED_SUBJECT_LINK_CLASS;
    TagDivClass = COMPLETED_TAGS_CLASS;

    tickDiv = (
      <div>
        { tickBtn }
        <img src={iconTick} alt="Tick" className="tick" />
      </div>
    );
  }

  return (
    <div className="subject">
      <div className="tickBtn" />
      {tickDiv}
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
  subject: PropTypes.object,
};
Subject.defaultProps = {
  subject: {},
};

export default Subject;
