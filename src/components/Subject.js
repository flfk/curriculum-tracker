import React from 'react';
import PropTypes from 'prop-types';
import SubjectTag from './SubjectTag';

import '../styles/subject.css';

const Subject = (props) => {
  const { subject } = props;

  const {
    type, duration, author, link,
  } = subject;

  const typeTag = <SubjectTag key={type} tagName="type" tagValue={type} />;
  const durationTag = <SubjectTag key={duration} tagName="duration" tagValue={duration} />;
  const authorTag = <SubjectTag key={author} tagName="author" tagValue={author} />;

  return (
    <div className="subject">
      <button className="tickBtn" />
      <a className="subjectLink" href={link}>{ subject.name}</a>
      <div className="subjectTagsDiv">
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
