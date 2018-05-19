import React from 'react';
import PropTypes from 'prop-types';

import SubjectModel from '../model/SubjectModel.json';
import '../styles/subject.css';

import iconOnlineCourse from '../icons/IconScreen.png';
import iconDuration from '../icons/IconHourGlass.png';
import iconAuthor from '../icons/IconFeather.png';

const subjectData = SubjectModel;

const SubjectTag = (props) => {
  const { tagName } = props;
  const { tagValue } = props;

  // Test if tag is empty
  if (tagValue === '') {
    return (<div />);
  }

  // Return correct icon
  let tagIcon = '';
  if (tagName === 'type') {
    if (tagValue === 'Online Course') {
      tagIcon = iconOnlineCourse;
    }
  }
  if (tagName === 'duration') {
    tagIcon = iconDuration;
  }
  if (tagName === 'author') {
    tagIcon = iconAuthor;
  }

  return (
    <div className="subjectTag">
      <img src={tagIcon} alt={`${tagValue} icon`} />
      {tagValue}
    </div>
  );
};

const Subject = (props) => {
  const { subjectID } = props;
  const subject = subjectData[subjectID];

  const { type, duration, author } = subject;

  const typeTag = <SubjectTag key={type} tagName='type' tagValue={type} />;
  const durationTag = <SubjectTag key={duration} tagName='duration' tagValue={duration} />;
  const authorTag = <SubjectTag key={author} tagName='author' tagValue={author} />;

  const subjectTags = typeTag;

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
