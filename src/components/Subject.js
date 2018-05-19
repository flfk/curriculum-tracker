import React from 'react';
import PropTypes from 'prop-types';

import SubjectModel from '../model/SubjectModel.json';
import '../styles/subject.css';

import SubjectTag from './SubjectTag';

const subjectData = SubjectModel;

const Subject = (props) => {
  const { subjectID } = props;
  const subject = subjectData[subjectID];

  const { type, duration, author } = subject;

  const typeTag = <SubjectTag key={type} tagName='type' tagValue={type} />;
  const durationTag = <SubjectTag key={duration} tagName='duration' tagValue={duration} />;
  const authorTag = <SubjectTag key={author} tagName='author' tagValue={author} />;

  return (
    <div className="subject">
      <button className="tickBtn" />
      <div className="subjectName">{ subject.name }</div>
      <div className="subjectTagsDiv">
        <div className="subjectTag">{ typeTag }</div>
        <div className="subjectTag">{ durationTag }</div>
        <div className="subjectTag">{ authorTag }</div>
      </div>
    </div>
  );
};

Subject.propTypes = {
  subjectID: PropTypes.string,
};
Subject.defaultProps = {
  subjectID: '',
};

export default Subject;
